const Project = require('../models/project.model.js')
const Contact = require('../models/contact.js')
const Admin = require('../models/admin.model.js')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')



const login = async (req, res) => {

      try{

 const {name, email, password} = req.body

    const admin = await Admin.findOne({email})

    if(!admin) {
       return res.status(401).json({message: "Invalid Email or Password!!"})        
    }


    const isMatch = await bcrypt.compare(password, admin.password)

    if(!isMatch) {
        return res.status(401).json({message: "Invalid Email or Password!!"})        

    }

    const token = jwt.sign(
        {id: admin._id},
        process.env.JWT_SECRET,
        {expiresIn: '1d'}
    );

  res.cookie("token", token, {
    httpOnly: true,
    secure: true,
    sameSite: "none",
    path: "/"
});
    
    res.status(200).json({
        success: true,
        message: "Login successful"
    })

    }

    catch(err) {
        res.status(500).json({message: "Server Error"})
    }
}

const createProject = async (req, res) => {

    try{

        const {title, description, techstack, githubLink, link, createdBy} = req.body

        if(!title || !description && !techstack) {
            return res.status(400).json({message: "All fields required!"})
        }

        const project = await Project.create({
            title,
            description,
            techstack,
            githubLink,
            link,
            createdBy: req.admin

        });

        res.status(201).json({
            success: true,
            message: "Project created succesfully",
            project
        })


    }
    catch(err) {
        console.log(err.message)
        res.status(500).json({message: "server error"})
    }
}



const updateProject = async (req,res) => {
    try{
        const id = req.params.id;

        const updatedProject = await Project.findByIdAndUpdate(
            id,
            req.body,
            {new: true, runValidators: true}
        )

        if(!updatedProject) {
            return res.status(404).json({message: "Project Not Found!!"});
        }

        res.status(200).json({
            success: true,
            message: "Project Updated Successfully",
            project: updatedProject
        })
    }
    
    catch(err) {
        res.status(500).json({message: "Server Error"})
    }
}


const deleteProject = async (req, res) => {

    try{
    
        const id = req.params.id;
    
        const del = await Project.findByIdAndDelete(id)
    
        if(!del) {
            return res.status(404).json({message: "Project Not Found!!!"})
        }
    
        res.status(200).json({
            success: true,
            message: "Project Deleted Successfully!"
        })

    }
    
    catch(err) {
        return res.status(500).json({message: "Server Error!"})
    }

}

const contact = async(req, res) => {
    try{

        const contact = await Contact.find()

        if(!contact) {
            return res.status(400).json({message: "No Contact Found"})
        }


        res.status(200).json({
            success: true,
            message: "All messaged received!",
            contact
        })
    }

    catch (err) {
        return res.status(500).json({message: "Server Error"})
    }
}



module.exports = {login, createProject, updateProject, deleteProject, contact}
