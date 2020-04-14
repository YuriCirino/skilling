const express = require('express')
const app = express()

app.use(express.static(__dirname + '/statics'))

app.listen(2332, () => console.log('Executando...'))