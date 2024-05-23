"use strict"

import mongoose from "mongoose"
import os from "os"

const _SECONDS = 5000
export const countConnect = () => {
    const numConnection = mongoose.connections.length
    console.log(`Number of connection: ${numConnection}`)
}

const checkOverload = () => {
    setInterval(() => {
        const numConnection = mongoose.connections.length
        const numCore = os.cpus().length
        const memoryUsage = process.memoryUsage().rss
        const maxConnection = numConnection + 5

        if (numConnection > maxConnection) {
            console.log("Connection overload detected")
        }
    }, _SECONDS)
}