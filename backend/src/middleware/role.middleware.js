
const allowRoles = (...allowedRoles) => {
return (req, res, next) => {

    try{

        if(!req.adminRole) {
            return res.status(401).json({success: false, message: "Unauthorized Access!!"})
        }
    
        if(!allowedRoles.includes(req.adminRole)) {
        return res.status(401).json({
            success: false,
            message: "You dont have permission to access this route!!"})
    
        }
    
        next();
    }
    catch(err) {
        return res.status(500).json({
            success: false,
            message: "Role based authentication failed",
            error: err.message,
        })
    }

}


}

module.exports = allowRoles