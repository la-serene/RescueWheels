require("dotenv").config()
const express = require("express")
const morgan = require("morgan")
const { default: helmet } = require("helmet");
const compression = require("compression");
const app = express()

// init middlewares
app.use(morgan("dev"))
app.use(helmet())
app.use(compression())

// init dbx
require("./dbs/init.mongodb")

// init routes



// handling err

module.exports = app