const express = require("express");
const Admin = require('../models/admin.model.js')
const jwt = require('jsonwebtoken')
const auth = require('../middleware/auth.middleware.js')
const adminController = require('../controller/admin.controller.js')
const bcrypt = require('bcryptjs')
const route = express.Router()

route.post('/login', adminController.login)


route.post('/project', auth, adminController.createProject)
route.put('/project/:id', auth, adminController.updateProject)
route.delete('/project/:id', auth, adminController.deleteProject)

route.get('/contact', auth, adminController.contact)


module.exports = route