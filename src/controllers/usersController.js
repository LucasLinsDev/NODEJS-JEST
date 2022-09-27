import { database } from "../database.js";

const userController={
  criarUsuario(req,res){

    const {name} =req.body;
    if(name.length < 1 ){
      return res.status(403).json({message:'Não é possivel criar usuario sem o nome'});
    }

    database.push(name);

    return res.status(201).json({'messgae':`Usuário ${name}`});
  },

  listarUsuario(req,res) {

    return res.status(200).json(database);

  }
}


export {userController }