const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

mongoose.connect(
"mongodb+srv://asbasbasbgfd_db_user:<YoTO1QuboyShESNS>@cluster1.6r0t4vx.mongodb.net/?appName=Cluster1"
)
.then(()=> console.log("MongoDB Atlas Connected"))
.catch(err => console.log(err));