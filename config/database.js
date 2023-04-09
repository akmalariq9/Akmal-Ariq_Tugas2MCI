const { db_name } = require("./env");
const { db_host} = require("./env");
const { db_password } = require("./env");
const { db_port } = require("./env");
const { db_user } = require("./env");

module.exports = {
  "development": {
    "username": db_user,
    "password": db_password,
    "database": db_name,
    "host": db_host,
    "dialect": "mysql",
    "port" : db_port
  },
  "test": {
    "username": db_user,
    "password": db_password,
    "database": db_name,
    "host": db_host,
    "dialect": "mysql",
    "port" : db_port
  },
  "production": {
    "username": db_user,
    "password": db_password,
    "database": db_name,
    "host": db_host,
    "dialect": "mysql",
    "port" : db_port
  }
}
