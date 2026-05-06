
const jwt = require('jsonwebtoken')

const adminMiddleware = async (req, res,next) => {

    // With cookies
    // try {
      
    //     const token = req.cookies.token
    //     if(!token){
    //         return res.status(401).json({message: "Unauthorized Access!!"})
    //     }
    
    //     const verify = jwt.verify(token, process.env.JWT_SECRET)
    //     req.admin = verify.id
    //     next();

    // }
    // catch(err) {
    //     res.status(401).json({message: "Unauthorized Access!!"})
    // }


    // with bearer

      try {
    const authHeader = req.headers.authorization;

    if (!authHeader || !authHeader.startsWith("Bearer ")) {
      return res.status(401).json({ message: "Unauthorized Access!!" });
    }

    const token = authHeader.split(" ")[1];
    const verify = jwt.verify(token, process.env.JWT_SECRET);

    req.admin = verify.id;
    next();
  } catch (err) {
    return res.status(401).json({ message: "Unauthorized Access!!" });
  }
}

module.exports = adminMiddleware
