const express = require('express')
const route = express.Router()
const generalController = require('../controller/general.controller.js')

route.get("/", (req, res) => {
    res.send(" Here I am")
})

route.get('/projects', generalController.getProjects)

route.post('/contactus', generalController.contact)

module.exports = route
