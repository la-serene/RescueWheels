import Provider from "../models/ProviderAccount.js"

export const updateProviderProfile = async (req, res) => {
  const providerId = req.params.providerId
  const { name, phoneNumber, address, location } = req.body

  await Provider.findByIdAndUpdate(providerId, {
    name: name,
    phoneNumber: phoneNumber,
    address: address,
    location: location,
  }).exec()

  res.status(200).json({
    message: "Profile updated.",
  })
}
