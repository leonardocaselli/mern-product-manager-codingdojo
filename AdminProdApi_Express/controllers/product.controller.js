const { $where } = require('../models/Product')
const productServices = require('../services/product.services')
//const productService = require('../services/product.services')
module.exports = {

    getAll: async (req, res) => {
        const products = await productServices.getAll()
        res.send({ products })   // me regresa como objeto si esta dentro de {}
    },
    getOne: async ({ params: { id } }, res) => {
        try {
            const product = await productServices.getOne(id)
            res.send({ product })
        } catch (error) {
            res.status(400).json(error)
        }
    },
    create: async ({ body }, res) => {
        const product = await productServices.create(body)
        res.send({ product })
    },
    deleteOne: async ({ params: { id } }, res) => {
        const prod = await productServices.deletOne(id)
        res.send("deleteOne..")
    },
    updateOne: async ({ params: { id }, body }, res) => {
        const product = await productServices.updateOne(id, body)
        res.send({ product })
    },

}