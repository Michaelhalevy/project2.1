import express from 'express';
import usersController from './users.controller.js'

const router = express.Router()

// // 
router.get('/', usersController.getUsers)

// 
router.post('/singup', usersController.addUsers)

// 
router.post('/login', usersController.loginUser)






export default router;