const cluster = require("cluster");
const express = require("express");
const bodyParser = require("body-parser");

const { connection } = require("./config/db");

const numCPU = require("os").cpus().length;

if (cluster.isMaster) {
  console.log(`Master process is running with pid ${process.pid}`);

  // Fork workers
  for (let i = 0; i < numCPU; i++) {
    cluster.fork();
  }

  cluster.on("exit", (worker, code, signal) => {
    console.log(`worker ${worker.process.pid} died`);
    cluster.fork();
  });
} else {
  const app = express();

  app.use(bodyParser.json());
  app.use(express.json());

  app.get("/", (req, res) => {
    res.send("Working");
  });

  app.listen(8080, async () => {
    try {
      await connection;
      console.log("Database connection established");
      console.log(`Worker process ${process.pid} is running`);
    } catch (error) {
      console.error(`Error connecting to database: ${error}`);
    }
  });
}
