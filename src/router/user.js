const {getUser} = require('../controller/user');
const express = require('express');

const router = express.Router();

router.get('/info', getUser);

module.exports={router};