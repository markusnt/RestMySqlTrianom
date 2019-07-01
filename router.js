const express = require('express');

const routes = new express.Router();

const { User } = require('./app/models/user');

routes.get('/', (req, res) => {
    res.send('Hello World!');
});

routes.post('/register', async (req, res) => {
    const user = await User.create(req.body);
    res.json(user);
});

routes.get('/find/:id', (req, res) => {
    res.json('Im in register');
});

routes.get('/findall', (req, res) => {
    res.json('Im in Find All');
});

routes.put('/update/:id', (req, res) => {
    res.json('Im in update');
});

routes.delete('/delete/:id', (req, res) => {
    res.json('Im in delete');
});

module.exports = routes;
