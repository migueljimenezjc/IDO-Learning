const express = require("express");
const router = express.Router();
const middleware = require("../middlewares");
const jwt = require('jsonwebtoken');
const config = require("../../core/config.dev"); 

router.post('/login', async(req,res) => {
   try {
      if(!req.body.username){
         throw new Error("El campo username es necesario");
      }     
      
      const token = jwt.sign({ username: req.body.username, expiresIn: '8h' }, config.jwtSecretKey);

      return res.status(200).json({
          token
      });
   } catch(error) {
     return res.status(400).json({ message: error.message })
   }
 });
 
 router.post('/verify',[ middleware.VerificarToken ], async(req,res) => {
    try {
       return res.status(200).json(
           "Verificado"
       );
    } catch(error) {
      return res.status(400).json({ message: error.message })
    }
  });
  
 
module.exports = router;