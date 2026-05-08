
const jwt = require('jsonwebtoken')

const adminMiddleware = async (req, res,next) => {

    try {
      
        const token = req.cookies.token
        if(!token){
            return res.status(401).json({message: "Unauthorized Access!!"})
        }
    
        const verify = jwt.verify(token, process.env.JWT_SECRET)
        req.admin = verify.id
        next();

    }
    catch(err) {
        res.status(401).json({message: "Unauthorized Access!!"})
    }
}

module.exports = adminMiddleware
