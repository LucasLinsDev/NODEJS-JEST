import {Router} from 'express';

const routes = Router();

const database=['Nath']

routes.get('/users' , (req,res) => {

  return res.status(200).json(database);

});

routes.post('/users' , (req,res) => {
  
  try{
     const {name} =req.body
     database.push(name);
     return res.status(201).json(database);
  }catch(error){
    return res.status(500).json({message:'error'})
  }

});


export { routes }