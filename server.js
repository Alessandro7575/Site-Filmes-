require('dotenv').config();

const express = require('express');
const app = express();
const mysql = require('mysql');

// Configuração inicial da conexão com o banco de dados
const db = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME
});

// Estabelece a conexão com o banco de dados
db.connect(err => {
  if (err) {
    console.error('Erro ao conectar ao banco de dados:', err);
    return;
  }
  console.log('Conectado ao banco de dados MariaDB com sucesso!');
});

// Rota para verificar o status da conexão com o banco de dados
app.get('/status-db', (req, res) => {
  db.ping(err => {
    if (err) {
      console.error('Erro ao conectar ao banco de dados:', err);
      res.json({ status: 'Erro ao conectar ao banco de dados' });
    } else {
      res.json({ status: 'Conectado ao banco de dados MariaDB com sucesso!' });
    }
  });
});

// O restante do seu código do servidor...
// Por exemplo, definir outras rotas e iniciar o servidor
// app.listen(3000, () => {
//   console.log('Servidor rodando na porta 3000');
// });

