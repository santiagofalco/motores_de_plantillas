import { Router } from 'express'
import Service from '../services/service.js'

const router = Router()

const service = new Service('../products.json')


router.get('/', async (req, res) => {
    let productos = await service.getAll()
    res.render('products.ejs', {
        title: 'Lista de productos',
        productos
    })
})

export default router