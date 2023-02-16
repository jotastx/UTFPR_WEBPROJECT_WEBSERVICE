const mongoose = require('mongoose')

const SentimSchema = new mongoose.Schema({
    text: { type: String, required: true },
    type: { type: String, required: true },
    polarity: { type: String, required: true }
},
    { collection: 'sentim' }
)

const model = mongoose.model('SentimSchema', SentimSchema)

module.exports = model