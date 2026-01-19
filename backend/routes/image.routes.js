const router = require("express").Router();
const multer = require("multer");
const cloudinary = require("../config/cloudinary");
const Image = require("../models/Image");

const storage = multer.memoryStorage();
const upload = multer({ storage });

router.get("/", async (req, res) => {
  try {
    const { page, section } = req.query;

    if (!page || !section) {
      return res.status(400).json("page and section are required");
    }

    const images = await Image.find({ page, section });
    res.json(images);
  } catch (err) {
    console.error("FETCH ERROR:", err);
    res.status(500).json("Failed to fetch images");
  }
});

router.post("/upload", upload.single("image"), async (req, res) => {
  try {
    if (!req.file) return res.status(400).json("No file uploaded");

    const { page, section, key } = req.body;
    if (!page || !section || !key) {
      return res.status(400).json("page, section and key are required");
    }

    const stream = cloudinary.uploader.upload_stream(
      {
        folder: `starRadiologyImage/${page}/${section}`,
      },
      async (error, result) => {
        if (error) {
          console.error("Cloudinary Error:", error);
          return res.status(500).json(error.message);
        }

        const saved = await Image.findOneAndUpdate(
          { page, section, key },   
          {
            url: result.secure_url,
            public_id: result.public_id,
          },
          { upsert: true, new: true }
        );

        res.json(saved);
      }
    );

    stream.end(req.file.buffer);
  } catch (err) {
    console.error("UPLOAD ERROR:", err);
    res.status(500).json(err.message);
  }
});


router.get("/landing/services", async (req, res) => {
  try {
    const images = await Image.find({
      page: "landing",
      section: "services",
    });
    res.json(images);
  } catch (err) {
    res.status(500).json(err.message);
  }
});




router.get("/services/:section", async (req, res) => {
  try {
    const images = await Image.find({
      page: "services",
      section: req.params.section,  
    });
    res.json(images);
  } catch (err) {
    res.status(500).json(err.message);
  }
});



router.get("/page/:section", async (req, res) => {
  try {
    const section = req.params.section.toLowerCase();
    const all = await Image.find({});
    const images = await Image.find({
      page: "landing",
      section: section,
    });
    res.json(images);
  } catch (err) {
    console.error("ERROR:", err);
    res.status(500).json(err.message);
  }
});

router.get("/page/services", async (req, res) => {
  const images = await Image.find({
    page: "landing",
    section: "services",
  });
  res.json(images);
});


router.get("/page/:section/:key", async (req, res) => {
  try {
    const { section, key } = req.params;

    const images = await Image.find({
      page: "landing",
      section,
      key
    });

    res.json(images);
  } catch (err) {
    res.status(500).json(err.message);
  }
});


router.get("/services/:service/:key", async (req, res) => {
  try {
    const { service, key } = req.params;

    const images = await Image.find({
      page: "services",
      section: service.toLowerCase(),   
      key: new RegExp(`^${key}`, "i"),   
    });

    res.json(images);
  } catch (err) {
    res.status(500).json(err.message);
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const image = await Image.findById(req.params.id);
    if (!image) return res.status(404).json("Image not found");


    if (image.public_id) {
      await cloudinary.uploader.destroy(image.public_id);
    }

    await image.deleteOne();

    res.json({ success: true });
  } catch (err) {
    console.error("DELETE ERROR:", err);
    res.status(500).json("Delete failed");
  }
});

module.exports = router;
