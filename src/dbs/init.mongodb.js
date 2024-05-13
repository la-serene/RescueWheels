"use strict"

const mongoose = require("mongoose")
const connectString = "mongodb+srv://caoky2003xx:TYhU2PjJ7CA5HNHJ@rescuewheels.teym0xj.mongodb.net/?retryWrites=true&w=majority&appName=RescueWheels"

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

        mongoose.connect(connectString)
            .then(_ => console.log("Mongoose Successfully Connected!"))
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