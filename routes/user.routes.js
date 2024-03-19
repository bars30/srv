// user.routes.js
const express = require('express');
const router = express.Router(); // Use express.Router() to create a router

const userController = require('../controllers/user.controller');

// Define routes
router.post('/user', userController.createUser);
router.get('/user', userController.getUsers);
router.get('/user/:id', userController.getOneUser);
router.put('/user', userController.updateUser);
router.delete('/user/:id', userController.deleteUser);
router.get('/text', userController.getText);

module.exports = router;



