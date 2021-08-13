const Product = require('../models/Product')


module.exports = {
    getAll: async () => {
        return await Product.find({})
    },
    getOne: async (id) => {
        return await Product.findById(id)

    },
    create: async (body) => {
        const newProduct = new Product(body)
        return await newProduct.save()
    },
    deletOne: async (id) => {
        const prod = await Product.findByIdAndDelete(id)
        return prod
    },
    updateOne: async (id, body) => {
        const prod = await Product.findByIdAndUpdate(id, body, { new: true })
        return prod
    }

}
