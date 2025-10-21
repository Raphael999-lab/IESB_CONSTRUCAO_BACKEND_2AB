const express = require('express');
const router = express.Router();

let alunos = [
  {
    id: 1,
    nome: "João Pedro",
    cpf: "123456789",
    email: "joaozin@gmail.com",
    telefone: "11987654321",
    dataNascimento: "01/02/2000"
  },
  {
    id: 2,
    nome: "Maria",
    cpf: "1234433787",
    email: "mariazin@gmail.com",
    telefone: "11912345678",
    dataNascimento: "02/02/2000"
  }
];

let nextId = 3;

// LISTAR TODOS
router.get('/', (req, res) => {
  res.json(alunos);
});

// BUSCAR UM
router.get('/:id', (req, res) => {
  const idRecebido = req.params.id;
  const aluno = alunos.find(p => p.id == idRecebido);
  if (!aluno) {
    return res.status(404).json({ erro: "Aluno não encontrado!!!" });
  }
  res.json(aluno);
});

// CRIAR
router.post('/', (req, res) => {
  const { nome, cpf, email, telefone, dataNascimento } = req.body;
  if (!nome || !cpf || !email || !telefone || !dataNascimento) {
    return res.status(400).json({ erro: "Todos os campos são obrigatórios!" });
  }
  if (alunos.some(a => a.cpf === cpf)) {
    return res.status(400).json({ erro: "CPF já cadastrado!" });
  }
  if (alunos.some(a => a.email === email)) {
    return res.status(400).json({ erro: "Email já cadastrado!" });
  }
  const newAluno = {
    id: nextId++,
    nome,
    cpf,
    email,
    telefone,
    dataNascimento
  };
  alunos.push(newAluno);
  res.status(201).json(newAluno);
});

// EDITAR
router.put('/:id', (req, res) => {
  const idRecebido = req.params.id;
  const index = alunos.findIndex(a => a.id == idRecebido);
  if (index === -1) {
    return res.status(404).json({ erro: "Aluno não encontrado!!!" });
  }
  const { nome, cpf, email, telefone, dataNascimento } = req.body;
  if (!nome || !cpf || !email || !telefone || !dataNascimento) {
    return res.status(400).json({ erro: "Todos os campos são obrigatórios!" });
  }
  if (alunos.some(a => a.cpf === cpf && a.id != idRecebido)) {
    return res.status(400).json({ erro: "CPF já cadastrado!" });
  }
  if (alunos.some(a => a.email === email && a.id != idRecebido)) {
    return res.status(400).json({ erro: "Email já cadastrado!" });
  }
  alunos[index] = {
    ...alunos[index],
    nome,
    cpf,
    email,
    telefone,
    dataNascimento
  };
  res.json(alunos[index]);
});

// DELETAR
router.delete('/:id', (req, res) => {
  const idRecebido = req.params.id;
  const index = alunos.findIndex(a => a.id == idRecebido);
  if (index === -1) {
    return res.status(404).json({ erro: "Aluno não encontrado!!!" });
  }
  alunos.splice(index, 1);
  res.status(204).send();
});

module.exports = router;