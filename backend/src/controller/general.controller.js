const Project = require('../models/project.model.js')
const Contact = require('../models/contact.js')

const getProjects = async(req, res) => {

    try{

        const projects = await Project.find().sort({createdAt: -1})
    
        res.status(200).json({
            success: true,
            count: projects.length,
            projects
        });

    }

    catch(err) {
        return res.status(500).json({message: "Server Error"});
    }
    


}

const contact = async(req, res) => {

    try{

        const{name, email, message} = req.body

        if(!name || !email || !message) {
            return res.status(400).json({message: "All Fields Required!"})
        }

        const contact = await Contact.create({
            name,
            email,
            message
        })


        res.status(200).json({
            success: true,
            message: "messaged send successfully",
            contact
        })


    }

    catch(err) {
        return res.status(500).json({message: "Server Error"})
    }
}

module.exports = {getProjects, contact}