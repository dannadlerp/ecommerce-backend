const express = require("express");
const routes = require("./routes");
const sequelize = require("./config/connection");
const path = require("path");
const { sync } = require("./models");
const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(routes);

sequelize
  .sync() // sync sequelize models to the database, then turn on the server
  .then(() => {
    console.log("sequelize is synced with database");
    app.listen(PORT, () => {
      console.log(`App listening on port ${PORT}`);
    });
  })
  .catch((error) => {
    console.error("Error syncing Sequelize models:", error);
  });
