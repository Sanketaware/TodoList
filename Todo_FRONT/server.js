const express = require("express");
const app = express();
const path = require("path");
const { exec } = require("child_process");
const cors = require("cors"); // Import the CORS middleware

app.use(cors()); // Use CORS middleware to enable CORS for all routes

// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, "public")));

// Define routes
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

// Start the server
const PORT = process.env.PORT || 3000;
const server = app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);

  const openCommand =
    process.platform === "win32"
      ? `start http://localhost:${PORT}`
      : process.platform === "darwin"
      ? `open http://localhost:${PORT}`
      : `xdg-open http://localhost:${PORT}`;

  exec(openCommand);
});

// Gracefully handle server close
process.on("SIGINT", () => {
  server.close();
  process.exit(0);
});
