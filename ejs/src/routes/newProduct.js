import { Router } from 'express'
import Service from '../services/service.js'

const router = Router()

const service = new Service('../products.json')

router.get('/', async (req, res) => {
    res.render('newProduct.ejs')
})

router.post('/', async (req, res) => {
    const producto = req.body
    if (!producto.name) {
        return res.status(400).send({ status: 'error', error: 'No se envio un nombre de producto' })
    }
    if (!producto.price) {
        return res.status(400).send({ status: 'error', error: 'No se envio un precio de producto' })
    }
    if (!producto.thumbnail) {
        return res.status(400).send({ status: 'error', error: 'No se envio una url de producto' })
    } else {
        const idInsertado = await service.post(producto)
        res.send({ status: 'success', message: `Producto añadido con id ${idInsertado}` })
    }

})


export default router