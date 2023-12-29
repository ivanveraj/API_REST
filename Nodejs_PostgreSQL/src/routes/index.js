const { Router }=require('express');
const router=Router();

const { getAnimales, createAnimales, deleteAnimales,getAnimalesID, updateAnimales }=require('../controllers/index.controller')
router.get('/animales',getAnimales);
router.get('/animales/:id',getAnimalesID);
router.post('/animales',createAnimales);
router.delete('/animales/:id',deleteAnimales);
router.put('/animales/:id',updateAnimales);

module.exports=router;