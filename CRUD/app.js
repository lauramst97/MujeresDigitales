var express = require('express');
const mongoose = require('mongoose');
global.app = express()
global.config = require(__dirname + '/config.js').config
global.path = require('path')
global.appRoot = path.resolve(__dirname)

mongoose.connect('mongodb://127.0.0.1:27017/' + config.nombrebd, {useNewUrlParser:true,useUnifiedTopology:true},(error,response) => {
    if(error){
        console.log(error)
    }
    else{
    console.log('conexion a mongo correcta')
    }
})

require('./routes/rutas.js')

//exponer nuestro aplicativo del lado del front end
app.use('/', express.static(__dirname +'/pagina'))
app.use('/imagenes', express.static(__dirname +'/imagenes'))

app.listen(config.puerto,function() {
    console.log('servidor funcionando por el puerto:' + config.puerto)
})