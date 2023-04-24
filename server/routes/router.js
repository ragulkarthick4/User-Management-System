const express=require('express')
const route=express.Router()
const services=require('../services/render')
const controller=require('../controller/controller')
route.get('/',services.homeRoutes) //Root route GET method
route.get('/add-user',services.add_user) // GET add user
route.get('/update-user',services.update_user) //GET update user
//API
route.post('/api/users',controller.create)
route.get('/api/users',controller.find)
route.put('/api/users/:id',controller.update)
route.delete('/api/users/:id',controller.delete)
module.exports=route