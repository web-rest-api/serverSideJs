// Multer efficiently parses public resources to lighten the load time in a webpage.
import multer from "multer";

// Dictionary mapping browser image types (MIME types) to simple file extensions, ensuring saved file has correct extension
const MIME_TYPES = {
  "image/jpg": "jpg",
  "image/jpeg": "jpg",
  "image/png": "png",
};

// `multer.diskStorage` tells multer how to handle the file once it hits the server
const storage = multer.diskStorage({
  destination: (req, file, callback) => {  // Defines where to save file
    callback(null, "public/uploads");  // 1st arg is null (i.e. no err), and the 2nd is the folder path where the images will livex
  },
  filename: (req, file, callback) => {
    const name = file.originalname.split(" ").join("_");  // Takes  original name and replaces spaces with underscores to prevent URL issues
    const extension = MIME_TYPES[file.mimetype];  // Looks up  correct extension using MIME_TYPES
    // Creates a unique filename by adding timestamp (Date.now()). This prevents two users from accidentally overwriting files if they upload image with same name
    callback(null, name + Date.now() + "." + extension);
  },
  
});

// Init Multer with the `storage` config; Tells server to expect one single file in a form field specifically named "image"
export default multer({ storage: storage }).single("image");


