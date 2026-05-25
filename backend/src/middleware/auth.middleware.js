
const jwt = require('jsonwebtoken')
const Admin = require('../models/admin.model.js')

const adminMiddleware = async (req, res,next) => {

    try {
      
        const token = req.cookies.token
        if(!token){
            return res.status(401).json({message: "Unauthorized Access!!"})
        }
    
        const verify = jwt.verify(token, process.env.JWT_SECRET)
        req.admin = verify.id

        // updating code to pass role of admin too
        const adminDocument = await Admin.findById(verify.id)

        if (!adminDocument) {
          return res.status(404).json({ message: 'Admin not found' });
    }
        req.adminRole = adminDocument.role



        next();

    }
    catch(err) {
        return res.status(401).json({message: "Unauthorized Access!!"})
    }
}

module.exports = adminMiddleware
