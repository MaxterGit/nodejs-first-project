const express = require("express");
const path = require("path");
const url = require("url");


import indexRoutes from './src/routes/index.js'

const app = express()

const __dirname = dirname(fileURLToPath(import.meta.url))

app.set('views', join(__dirname, '/src/views'))

console.log(join(__dirname, '/src/views'))

app.set('view engine', 'ejs')
app.use(indexRoutes)

app.use(express.static(join(__dirname, '/src/public')))

app.listen(3000)
console.log('Server is listening on port', 3000)
