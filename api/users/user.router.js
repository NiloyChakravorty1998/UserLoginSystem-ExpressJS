const { createUser, getAllUser } = require('./user.controller')
const router = require('express').Router();

router.post('/',createUser);
router.get('/', getAllUser);

module.exports= router;