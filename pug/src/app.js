import express from 'express'
import __dirname from './utils.js'
import ProductsView from './routes/products.js'
import NewProduct from './routes/newProduct.js'

const app = express()

app.use(express.json())

const server = app.listen(8080, () => {
    console.log('Listening on 8080')
})


app.set('views', __dirname+'/views')
app.set('view engine', 'pug')


app.use("/public", express.static(__dirname+'/public'));
app.use('/productos', ProductsView)
app.use('/newProduct', NewProduct)