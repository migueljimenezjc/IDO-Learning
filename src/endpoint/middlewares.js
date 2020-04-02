const config = require("../core/config.dev");
const jwt = require('jsonwebtoken');
const middleware = {}; 

middleware.VerificarToken = async (req, res, next) => {  
    let splitArray;
    let authToken;   
    
    if (req.headers.authorization) {         
        if (typeof req.headers.authorization === 'string' && req.headers.authorization.length > 0)      
        {           
            splitArray = req.headers.authorization.split(' ');          
            if (splitArray.length === 2 && splitArray[0] === 'Bearer') {            
                [, authToken] = splitArray;           
            }         
        }       
    }     

    if (!authToken) {       
        return res.status(401).json({       
            message: 'token no valido',     
        });      
    }

    try {              
        const decoded = jwt.verify(authToken,config.jwtSecretKey);                                       
       } catch (err) {    
          console.log(err);
          return res.status(440).json({      
              message: err.name,     
              description: err.message,    
          });
      }       

    next();
}
        

module.exports = middleware;