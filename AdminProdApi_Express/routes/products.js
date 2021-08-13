const { Router } = require('express')

const productController = require('../controllers/product.controller')
const router = Router()


router.get('/', productController.getAll)     //mostrar todos 
router.get('/showone/:id', productController.getOne)   //mastrar uno
router.post('/create', productController.create)      //crear 
router.delete('/delete/:id', productController.deleteOne)  //eliminar
router.put('/edit/:id', productController.updateOne)      // actualizar
module.exports = router