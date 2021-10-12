var usuariosModel = {}

const mongoose = require('mongoose')
const Schema = mongoose.Schema;

var UserSchema = new Schema({
    nombre:String,
    apellidos:String,
    direccion:String,
    telefono:Number
})

const MyModel = mongoose.model('usuario', UserSchema)

//Create
usuariosModel.guardar = function(post,callback) {
    
    const instancia = new MyModel

    instancia.nombre = post.nombre
    instancia.apellidos = post.apellidos
    instancia.direccion = post.direccion
    instancia.telefono = post.telefono

    instancia.save((error,userCreate)=>{
        if(error) {
            console.log(error)
            return callback({state:false,info:error})
        }
        else{
            console.log(userCreate)
            return callback({state:true,info:userCreate})

        }
    })

    
}
//Read
usuariosModel.listar = function(post,callback) {
    MyModel.find({},{nombre:1, apellidos:1, id:1, direccion:1}, (err,registros)=>{
        if(err){
            console.log(err)
            return callback(err)
        } 
        else{
        return callback(registros)
        }
    })
}
//Update
usuariosModel.actualizar = function(post,callback) {
    
    MyModel.findByIdAndUpdate(post.id,
        {nombre:post.nombre,
        apellido:post.apellidos,
        direccion:post.direccion
    },(error,usuariomodificado)=>{
        if(error) {
            console.log(error)
            return callback({state:false,info:error})
        }
        else{
            console.log(usuariomodificado)
            return callback({state:true,info:usuariomodificado})

        }
    })
}
//Delete
usuariosModel.eliminar = function(post,callback) {
    MyModel.findByIdAndDelete(post.id,(error,eliminado)=>{
        if(error) {
            console.log(error)
            return callback({state:false,info:error})
        }
        else{
            console.log(eliminado)
            return callback({state:true,info:eliminado})

        }
    }) 
}





module.exports.usuarios = usuariosModel;