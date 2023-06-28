const { createUser, getAllUser, updateUser, getUser, deleteUser, login } = require('./user.controller')
const router = require('express').Router();
const { checkToken } = require('../../auth/tokenValidation')

router.post('/', checkToken, createUser);
router.get('/', checkToken, getAllUser);
router.put('/:id',checkToken, updateUser);
router.get('/:id',checkToken, getUser);
router.delete('/:id',checkToken, deleteUser);
router.post('/login', login)
module.exports= router;