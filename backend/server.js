require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bcrypt = require("bcryptjs");
const Admin = require("./models/admin");   //  correct path

const app = express();
app.use(cors());
app.use(express.json());

// ---------------- Mongo Connection ----------------
mongoose
  .connect(process.env.MONGO_URI)
  .then(async () => {
    console.log("MongoDB Connected");

    // 🔐 Auto create admin if not exists
    await createDefaultAdmin();
  })
  .catch((err) => console.log("❌ Mongo Error", err));

// ---------------- Auto Admin Creator ----------------
async function createDefaultAdmin() {
  try {
    const email = "admin@raghav.com";
    const password = "admin123";   // 👈 change if you want

    const already = await Admin.findOne({ email });
    if (already) {
      console.log("ℹ️ Admin already exists");
      return;
    }

    const hash = await bcrypt.hash(password, 10);

    await Admin.create({
      email,
      password: hash,
    });

    console.log("✅ Default Admin Created");
    console.log("👉 Email:", email);
    console.log("👉 Password:", password);
  } catch (err) {
    console.log("❌ Admin creation failed", err);
  }
}

// ---------------- Routes ----------------
app.use("/api/auth", require("./routes/auth.routes"));
app.use("/api/images", require("./routes/image.routes"));

// ---------------- Server ----------------
app.listen(5000, () => {
  console.log("🚀 Server running on http://localhost:5000");
});
