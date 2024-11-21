// src/app/pages/api/upload.js
export default function handler(req, res) {
  if (req.method === "POST") {
    // handle file upload here (e.g., store on cloud or file system)
    res.status(200).json({ message: "File uploaded successfully" });
  } else {
    res.status(405).json({ message: "Method not allowed" });
  }
}
