import mongoose from "mongoose"
import Service from "./Service.js"

const pendingServiceSchema = new mongoose.Schema({
    fromProviderId: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: "Provider"
    },
    toServiceId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Service"
    },
    pendingServiceName: {
        type: String,
        required: true,
    },
    pendingServiceDescription: {
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
            const fromProviderId = this.fromProviderId
            const toServiceId = this.toServiceId
            const pendingServiceName = this.pendingServiceName
            const pendingServiceDescription = this.pendingServiceDescription

            if (!toServiceId) {
                await new Service({fromProviderId, pendingServiceName, pendingServiceDescription}).save()
                console.log("Successfully created service from pending service.")
            } else {
                const service = await Service.findOne({ toServiceId }).exec()
                service.ServiceName = pendingServiceName
                service.pendingServiceDescription = pendingServiceDescription

                await service.save()
                console.log("Successfully updated service from pending service.")
            }
        }
    }
})

const PendingService = mongoose.model("PendingService", pendingServiceSchema)
export default PendingService