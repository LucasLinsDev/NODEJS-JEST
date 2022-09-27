import { database } from "../database.js";
import {Request,Response} from 'express'
export class userController{
  criarUsuario(request:Request,response:Response):Response{

    const {name} =request.body;
    if(name.length < 1 ){
      return response.status(403).json({message:'Não é possivel criar usuario sem o nome'});
    }

    database.push(name);

    return response.status(201).json({'messgae':`Usuário ${name}`});
  }

  // listarUsuario(req,res) {

  //   return res.status(200).json(database);

  // }
}


