import express from 'express'
import __dirname from './utils.js'
import products from './routes/products.js'
import newProduct from './routes/newProduct.js'


const app = express()

app.use(express.json())
app.set('views', __dirname+'/views')
app.set('view engine', 'ejs')

app.use('/productos', products)
app.use('/newProduct', newProduct)

const server = app.listen(8080, () => {
    console.log('Listening on 8080')
})
