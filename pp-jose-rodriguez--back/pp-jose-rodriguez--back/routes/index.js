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
    res.redirect("/");
});

router.get('/delete/:id', async function (req, res) {
    const { id } = req.params;
    await Task.remove({ _id: id });
    res.redirect("/");
});

router.get('/edit/:id', async function (req, res) {
    const { id } = req.params;
    const task= await Task.findById(id);
    res.render("edit", {
        task
    });
});

router.post('/edit/:id', async function (req, res) {
    const { id } = req.params;
    await Task.update({ _id: id }, req.body);
    res.redirect('/');
});

module.exports = router;
