const express = require("express");
const app = express();

// Port configuration
const PORT = process.env.PORT || 3000;

// Routes
let search = require("./routes/search");
app.use('/search', search);

let result = require("./routes/result");
app.use('/result', result);

// Static file serving
app.use(express.static("dist"));

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
