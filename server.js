// Vendor Dependencies
const { ApolloServer, gql } = require("apollo-server");
const mongoose = require("mongoose");
const fs = require("fs");
const path = require("path");

// Custom Dependencies
require("dotenv").config({ path: "./variable.env" });
const User = require("./models/User");
const Post = require("./models/Post");

const filePath = path.join(__dirname, "typeDefs.gql");
const typeDefs = fs.readFileSync(filePath, "utf-8");

mongoose
  .connect(
    process.env.MONGO_URI,
    { useNewUrlParser: true }
  )
  .then(() => console.log("DB Connected"))
  .catch(err => console.error(err));

const server = new ApolloServer({
  typeDefs
});

server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});
