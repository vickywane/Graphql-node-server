import express from 'express';
import SERVER from './src/schema.js';
import  mongoose from "mongoose";

const APP = express();


SERVER.applyMiddleware({
  app: APP
});

const PORT = 4000 || process.env;                           
 
mongoose                          
    .connect( 'mongodb://127.0.0.1:27017/Unispoon', { useNewUrlParser: true })            
    .then(() => console.log("DB CONNECTED") )                                                                                                                         
    .catch(err => console.error(err) );

APP.listen(PORT, () => {
  console.log(`The server has started on port: ${PORT}`);
  console.log(`http://localhost:${PORT}/graphql`);
})


export default APP; 