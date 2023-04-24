const cluster = require("cluster");
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
require("dotenv").config();

const { connection } = require("./config/db");
const { categoryRouter } = require("./routes/category.route");
const { articlesRouter } = require("./routes/articles.route");
const { userRouter } = require("./routes/user.route");
const { errorHandler } = require("./middlewares/errorHandler");

const numCPU = require("os").cpus().length;
const PORT = process.env.PORT || 8080;

if (cluster.isMaster) {
  console.log(`Master process is running with pid ${process.pid}`);
  // Fork workers
  for (let i = 0; i < numCPU; i++) {
    cluster.fork();
  }
  cluster.on("exit", (worker) => {
    console.log(`worker ${worker.process.pid} died`);
    cluster.fork();
  });
} else {
  const app = express();

  app.use(bodyParser.json());
  app.use(express.json());
  app.use(cors());

  app.get("/", (req, res, next) => {
    next();
    res.send("<h4>Welcome to codercrush!</h4>");
  });

  // Routes
  app.use("/category", categoryRouter);
  app.use("/article", articlesRouter);
  app.use("/user", userRouter);

  // Error handler middleware
  app.use(errorHandler);

  app.listen(PORT, async () => {
    try {
      await connection;
      console.log("Database connection established");
      console.log(`Worker process ${process.pid} is running`);
    } catch (error) {
      console.error(`Error connecting to database: ${error}`);
    }
  });
}
