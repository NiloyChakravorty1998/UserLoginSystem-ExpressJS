const { createUser, getAllUser, updateUser, getUser, deleteUser } = require('./user.controller')
const router = require('express').Router();

router.post('/',createUser);
router.get('/', getAllUser);
router.put('/:id', updateUser);
router.get('/:id', getUser);
router.delete('/:id', deleteUser);
module.exports= router;