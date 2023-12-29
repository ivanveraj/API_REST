const { json } = require('express');
const {Pool}=require('pg');
const pool=new Pool({
    host:'localhost',
    user:'postgres',
    password:'Jivjmmm08@',
    database:'veterinaria',
    port:'5432'
})

const getAnimales=async (req,res)=>{
    const respose=await pool.query('select * from animales');
    res.status(200).json(respose.rows);
}

const createAnimales=async (req,res)=>{
    const {nombre, raza, sexo, edad}=req.body;
    const response=await pool.query('insert into animales(nombre,raza,sexo,edad) values ($1,$2,$3,$4)',[nombre,raza,sexo,edad]);
    console.log(response);
    res.json({
        message:'Animal creado correctamente',
        body:{
            animal:{nombre,raza,sexo,edad}
        }
    })
    res.send('Animales creados');
}

const getAnimalesID=async (req,res)=>{
    const id=req.params.id;
    const respose=await pool.query('select * from animales where id=$1',[id]);
    res.json(respose.rows);
}

const deleteAnimales=async (req,res)=>{
    const id=req.params.id;
    const respose=await pool.query('delete from animales where id=$1',[id]);
    res.json(respose);
}

const updateAnimales=async (req,res)=>{
    const id=req.params.id;
    const {nombre, raza, sexo, edad}=req.body;
    const respose=await pool.query('update animales set nombre=$1, raza=$2, sexo=$3, edad=$4 where id=$5',[nombre,raza,sexo,edad,id]);
    res.json('Animal actualizado');
}

module.exports={
    getAnimales,
    createAnimales,
    getAnimalesID,
    deleteAnimales,
    updateAnimales
}