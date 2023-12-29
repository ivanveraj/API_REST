const express=require('express');
const app=express();

//Middlewares
app.use(express.json());
app.use(express.urlencoded({extended:false}));


//Routes
app.use(require('./routes/index'));

//Para ejecutar npm run dev
app.listen(3000);
console.log("Conectado al puerto 3000");