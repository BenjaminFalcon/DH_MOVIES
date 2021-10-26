const express = require ('express');
const { appendFile } = require('fs');
const path = require('path');
var router = express.Router();
let moviescontrollers = require('../controllers/moviescontrollers')
const app = express()


// router.get('/home', moviescontrollers.list);

router.get('/', function (req, res){
    res.send('movies')
    });

router.get('/detalle', function (req, res){

});

router.get('/crear', function (req, res) {

});

module.exports = router;