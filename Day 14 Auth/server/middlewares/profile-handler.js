import multer from "multer";

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/");
  },
  filename: (req, file, cb) => {
    cb(null, req.user["user_id"] + ".png");
  },
});

const upload = multer({ storage: storage });
export default upload;
