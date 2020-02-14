const express = require("express");
const dotenv = require("dotenv");
dotenv.config();
const helmet = require("helmet");
const morgan = require("morgan");
const actionRoutes = require("./routes/actionsRoutes");
const projectRoutes = require("./routes/projectsRoutes");
const server = express();
const port = process.env.PORT || 8001;
server.use(express.json());
server.use(helmet());
server.use(morgan("combined"));

server.use("/api/actions", actionRoutes);
server.use("/api/actions", projectRoutes);

server.use("/", (req, res) => {
  res.status(200).send("API is working");
});

server.listen(port, () => {
  `server is listening on port ${port}`;
});
