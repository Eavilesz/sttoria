const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const app = express();

app.use(cookieParser());
require("./server/config/mongoose.config");
// app.use(cors({ credentials: true, origin: "http://localhost:8000" }));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
require("./server/routes/user.routes")(app);
app.listen(8000, () => {
  console.log("Listening at Port 8000");
});
