const dotenv = require("dotenv").config();
const express = require("express");
const connectDB = require("./config/connectDB");
const Task = require("./models/taskModel");
const taskRoutes=require("./routes/taskRoute");
const cors=require("cors");
const app = express();

const PORT = process.env.PORT || 5000;

app.use(cors())
//middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use("/api/tasks",taskRoutes);

app.get("/", (req, res) => {
  res.send("home page");
});

const startServer = async () => {
  try {
    await connectDB();
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  } catch (e) {
    console.log("error", e.message);
  }
};

startServer();
