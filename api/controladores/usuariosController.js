var usuariosModel = require(appRoot + '/api/modelos/usuariosModel.js').usuarios

var usuariosController = {}


//Crear
usuariosController.guardar = function (request, response) {
    var persona  = {
        nombre:request.body.nombre,
        apellidos:request.body.apellidos,
        direccion:request.body.direccion,
        telefono:request.body.telefono
    }
    console.log('-------------->request')
    console.log(persona)

    if(persona.nombre == "" || persona.nombre == undefined || persona.nombre == null){
        response.json({state:false,mensaje:'el campo nombre es obligatorio'})
        return false
    }

    if(persona.apellidos == "" || persona.apellidos == undefined || persona.apellidos == null){
        response.json({state:false,mensaje:'el campo apellidos es obligatorio'})
        return false
    }

    if(persona.direccion == "" || persona.direccion == undefined || persona.direccion == null){
        response.json({state:false,mensaje:'el campo direccion es obligatorio'})
        return false
    }
    usuariosModel.guardar(persona,function(respuesta){
        console.log('-------------->response')
        console.log(respuesta)
        response.json(respuesta)
    })
}
//Actualizar
usuariosController.actualizar = function (request, response) {
    var persona  = {
        nombre:request.body.nombre,
        apellidos:request.body.apellidos,
        direccion:request.body.direccion,
        telefono:request.body.telefono,
        id:request.body.id
    }
    console.log('-------------->request')
    console.log(persona)

    if(persona.id == "" || persona.id == undefined || persona.id == null){
        response.json({state:false,mensaje:'el campo id es obligatorio'})
        return false
    }
    if(persona.nombre == "" || persona.nombre == undefined || persona.nombre == null){
        response.json({state:false,mensaje:'el campo nombre es obligatorio'})
        return false
    }


    if(persona.apellidos == "" || persona.apellidos == undefined || persona.apellidos == null){
        response.json({state:false,mensaje:'el campo apellidos es obligatorio'})
        return false
    }

    if(persona.direccion == "" || persona.direccion == undefined || persona.direccion == null){
        response.json({state:false,mensaje:'el campo direccion es obligatorio'})
        return false
    }
    usuariosModel.actualizar(persona,function(respuesta){
        console.log('-------------->response')
        console.log(respuesta)
        if(respuesta.state == true){
            response.json({mensaje:'Usuario modificado correctamente'})
        }
        else{
            response.json({mensaje:'Se presento un error al modificar'})
        }
        
    })
}

//Listar
usuariosController.listar = function (request, response) {
    usuariosModel.listar(null,function(respuesta){
        response.json({respuesta})
    })
}
//Eliminar
usuariosController.eliminar = function (request, response) {
    var post = {
        id:request.body.id
    }
    if(post.id == null || post.id == undefined || post.id == ''){
        response.json({state:false, mensaje:'el campo id es un campo obligatorio'})
        return false;
    }

    usuariosModel.eliminar(post,function(respuesta){
        if(respuesta.state == true){
            response.json({state:true, mensaje:'Usuario Eliminado'})
        }
        else{
            response.json({state:false, mensaje:'Error al eliminar'})

        }
    })
}

module.exports.usuarios = usuariosController