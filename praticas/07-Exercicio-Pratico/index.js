const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

app.use((req, res, next) => {
  console.log("----- ###LOG da Requisicao");
  console.log("Time: ", new Date().toLocaleDateString());
  console.log("METODO: ", req.method);
  console.log("ROTA: ", req.url);
  next();
});

const alunosRouter = require('./routes/alunos');
const professoresRouter = require('./routes/professores');

app.use('/alunos', alunosRouter);
app.use('/professores', professoresRouter);

app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});