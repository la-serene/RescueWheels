import mongoose from "mongoose"
import Service from "./Service.js";

const pendingServiceSchema = new mongoose.Schema({
    from: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: "Provider"
    },
    to: {
        type: mongoose.Schema.Types.ObjectId,
    },
    name: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now,
        expires: 86400
    }
}, {
    methods: {
        createService: async function () {
            const providerId = this.from
            const serviceId = this.to
            const name = this.name
            const description = this.description

            if (!serviceId) {
                await new Service({providerId, name, description}).save()
                console.log("Successfully created service from pending service.")
            } else {
                const service = await Service.findOne({_id: serviceId}).exec()
                service.name = name
                service.description = description

                await service.save()
                console.log("Successfully updated service from pending service.")
            }
        }
    }
})

const PendingService = mongoose.model("PendingService", pendingServiceSchema)
export default PendingService