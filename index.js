const express = require('express');

const { User } = require('./app/models');

const app = express();

app.use(express.urlencoded({ extended: false }));

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(3000);

User.create({ id: '987', cd_usuario: '1', ds_usuario: 'aa', senha_usuario: '123456' });

app.get('/users', (req, res) => {}); //Listar todos
app.post('/users', (req, res) => {}); // Criar
app.get('/users/:id', (req, res) => {}); //Buscar
app.put('/users/:id', (req, res) => {}); //Editar
app.delete('/users/:id', (req, res) => {}); //Deletar

app.post('/register', async (req, res) => {
  const user = await User.create(req.body);
  res.json(user);
});