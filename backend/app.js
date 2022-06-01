const express = require("express");
const restful = require("node-restful");
const cors = require("cors");
const bodyParser = require("body-parser");

const server = express();

const mongoose = restful.mongoose;
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://db/mydb')

// Middlewares
server.use(bodyParser.urlencoded({ extended: true }));
server.use(bodyParser.json());
server.use(cors());

// ODM
const Client = restful.model("Client", {
  name: { type: String, required: true },
});

// REST API
Client.methods(["get", "post", "put", "delete"]);

// Routes
Client.register(server, "/clients");

// Starting server
server.listen(3000, () => console.log("Server listening on PORT 3000"));
