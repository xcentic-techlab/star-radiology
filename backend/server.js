require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bcrypt = require("bcryptjs");
const Admin = require("./models/admin");   

const app = express();
app.use(cors());
app.use(express.json());

mongoose
  .connect(process.env.MONGO_URI)
  .then(async () => {
    console.log("MongoDB Connected");
    await createDefaultAdmin();
  })
  .catch((err) => console.log("Mongo Error", err));

async function createDefaultAdmin() {
  try {
    const email = process.env.ADMIN_EMAIL;
    const password = process.env.ADMIN_PASSWORD;

    if (!email || !password) {
      console.log("ADMIN_EMAIL or ADMIN_PASSWORD missing in .env");
      return;
    }

    const already = await Admin.findOne({ email });
    if (already) {
      console.log("Admin already exists");
      return;
    }

    const hash = await bcrypt.hash(password, 10);

    await Admin.create({
      email,
      password: hash,
    });

    console.log("Default Admin Created");
    console.log("Email:", email);
    console.log("Password:", password);
  } catch (err) {
    console.log("Admin creation failed", err);
  }
}

app.use("/api/auth", require("./routes/auth.routes"));
app.use("/api/images", require("./routes/image.routes"));

app.listen(5000, () => {
  console.log("Server running on http://localhost:5000");
});
