const express = require('express')
const app = express()

app.use(express.static(__dirname + '/statics'))
const port = process.env.PORT || 2332

app.listen(port, () => console.log('Executando...'))