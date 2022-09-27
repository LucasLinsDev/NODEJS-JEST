import express from 'express';
import cors from 'cors'
import {routes} from './routes.js'

const server=express();

server.use(express.json());


server.use(routes);

server.listen(5000,()=>{
  console.log(`Server running in http://localhost:5000`)
})