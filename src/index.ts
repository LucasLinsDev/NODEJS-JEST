import express from 'express';
import cors from 'cors'


const server=express();

server.use(express.json());


server.listen(5000,()=>{
  console.log(`Server running in http://localhost:5000`)
})