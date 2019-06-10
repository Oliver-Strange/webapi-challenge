require("dotenv").config();
const express = require("express");
const morgan = require("morgan");

const projectRouter = require("../data/routers/projectRouter");
const actionRouter = require("../data/routers/actionRouter");

const server = express();

// Global Middleware
server.use(express.json());
server.use(morgan("dev"));

// Route Handlers
server.use("/api/projects", projectRouter);
server.use("/api/actions", actionRouter);

server.get("/", (req, res) => {
  res.send(`
        <h2>Webapi Sprint Challenge</h2>
    `);
});

module.exports = server;
