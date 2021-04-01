'use strict';
var express = require('express');
var router = express.Router();

var Task = require('../public/javascripts/task');
/* GET home page. */
router.get('/', async function (req, res) {
    const tasks = await Task.find();
    console.log(tasks);
    res.render('index', {
        tasks,
        title: 'Practica'
    });
});

router.post('/add', async function (req, res) {
    const task = new Task(req.body);
    await task.save();
    //console.log(req);
    res.send("Recibido");
});

module.exports = router;
