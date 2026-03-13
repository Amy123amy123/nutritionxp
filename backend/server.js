const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const path = require("path");

const app = express();

app.use(cors());
app.use(express.json());

app.use(express.static(path.join(__dirname, "../public")));

mongoose.connect(
"mongodb+srv://asbasbasbgfd_db_user:YoTO1QuboyShESNS@cluster1.6r0t4vx.mongodb.net/nutritionxp?retryWrites=true&w=majority"
)
.then(() => console.log("MongoDB Atlas Connected"))
.catch(err => console.log(err));

app.get("/", (req,res)=>{
  res.sendFile(path.join(__dirname, "../public/index.html"));
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, ()=>{
  console.log(`Server running on port ${PORT}`);
});