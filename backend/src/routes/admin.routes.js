const express = require("express");
const Admin = require('../models/admin.model.js')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
const adminController = require('../controller/admin.controller.js')


const auth = require('../middleware/auth.middleware.js')
const role= require('../middleware/role.middleware.js')

const route = express.Router()

route.post('/login', adminController.login)


route.post('/project', auth, adminController.createProject)
route.put('/project/:id', auth, adminController.updateProject)
route.delete('/project/:id', auth, adminController.deleteProject)

route.get('/contact', auth, adminController.contact)

// create multiple admin
route.post("/create-admin", auth, role("superAdmin"), adminController.createAdmin)
//get list of all admins
route.get("/get-admins", auth, adminController.getAdmins)


module.exports = route