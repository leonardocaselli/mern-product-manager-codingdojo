const Mongoose = require('mongoose')

const productSchema = new Mongoose.Schema(
    {
        title: { type: String },
        price: { type: Number },
        description: { type: String }
    },
    { timestamps: true }

)
module.exports = Mongoose.model('products', productSchema)