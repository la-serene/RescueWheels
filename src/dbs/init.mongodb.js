"use strict"

const mongoose = require("mongoose")
const connectString = `mongodb+srv://${process.env.MONGODB_USERNAME}:${process.env.MONGODB_PASSWORD}@rescuewheels.d0n9rgt.mongodb.net/?retryWrites=true&w=majority&appName=RescueWheels`
const { countConnect } = require("../helpers/check.connect")

class Database {
    constructor() {
        this.connect()
    }

    connect(type = "mongodb") {
        if (1 === 1) {
            mongoose.set("debug", true)
            mongoose.set("debug", {
                color: true
            })
        }

        mongoose.connect(connectString, {
            maxPoolSize: 50
        })
            .then(_ => {
                console.log("Mongoose Successfully Connected!")
                countConnect()
            })
            .catch(err => console.log("Error Connected"))
    }

    static getInstance() {
        if (!Database.instance) {
            Database.instance = new Database()
        }

        return Database.instance
    }
}

const instanceMongodb = Database.getInstance()
module.exports = instanceMongodb