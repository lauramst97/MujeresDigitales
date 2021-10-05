var bodyParser = require('body-parser')
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))


var usuarios = require(appRoot + '/api/controladores/usuariosController.js').usuarios


app.post('/guardar', function(request,response){
    usuarios.guardar(request,response)

})

app.post('/actualizar', function(request,response){
    usuarios.actualizar(request,response)

})

app.post('/listar', function(request,response){
    usuarios.listar(request,response)

})

app.post('/eliminar', function(request,response){
    usuarios.eliminar(request,response)

})













