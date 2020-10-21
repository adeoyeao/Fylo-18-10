const mongoose = require("mongoose")

const EmailSchema = mongoose.Schema({
      email: {
            type: String,
            required: true
      }
})

module.exports = mongoose.model("email", EmailSchema)