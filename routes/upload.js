import multer from "multer";
import express from "express";
import path from "path";

export const uploadRouter = express.Router();

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/");
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + path.extname(file.originalname);
    cb(null, file.fieldname + "-" + uniqueSuffix);
  },
});

const upload = multer({ storage: storage });

uploadRouter.post("/", upload.single("image"), async (req, res) => {
  res.status(200).send(req.file);
});
