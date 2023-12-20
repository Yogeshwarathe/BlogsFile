var express = require("express");
var app = express();




// # dotenv environment variable files
// .env





// PORT
const PORT = process.env.PORT || 3000;

// the PORT listener
app.listen(PORT, () => {
  console.log(`Server is running on ${PORT} PORT`);
});