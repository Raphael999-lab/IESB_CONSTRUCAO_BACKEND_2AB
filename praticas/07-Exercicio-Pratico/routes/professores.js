const express = require('express');
const router = express.Router();

let professores = [
  {
    id: 1,
    nome: "Dr. Carlin",
    cpf: "111222333",
    email: "carlos@gmail.com",
    curso: "Ciência da Computação",
    disciplina: "Programação"
  },
  {
    id: 2,
    nome: "Profa. clara",
    cpf: "444555666",
    email: "ana@gmail.com",
    curso: "Matemática",
    disciplina: "Cálculo"
  }
];

let nextId = 3;

// LISTAR TODOS
router.get('/', (req, res) => {
  res.json(professores);
});

// BUSCAR UM
router.get('/:id', (req, res) => {
  const idRecebido = req.params.id;
  const professor = professores.find(p => p.id == idRecebido);
  if (!professor) {
    return res.status(404).json({ erro: "Professor não encontrado!!!" });
  }
  res.json(professor);
});

// CRIAR
router.post('/', (req, res) => {
  const { nome, cpf, email, curso, disciplina } = req.body;
  if (!nome || !cpf || !email || !curso || !disciplina) {
    return res.status(400).json({ erro: "Todos os campos são obrigatórios!" });
  }
  if (professores.some(p => p.cpf === cpf)) {
    return res.status(400).json({ erro: "CPF já cadastrado!" });
  }
  if (professores.some(p => p.email === email)) {
    return res.status(400).json({ erro: "Email já cadastrado!" });
  }
  const newProfessor = {
    id: nextId++,
    nome,
    cpf,
    email,
    curso,
    disciplina
  };
  professores.push(newProfessor);
  res.status(201).json(newProfessor);
});

// EDITAR
router.put('/:id', (req, res) => {
  const idRecebido = req.params.id;
  const index = professores.findIndex(p => p.id == idRecebido);
  if (index === -1) {
    return res.status(404).json({ erro: "Professor não encontrado!!!" });
  }
  const { nome, cpf, email, curso, disciplina } = req.body;
  if (!nome || !cpf || !email || !curso || !disciplina) {
    return res.status(400).json({ erro: "Todos os campos são obrigatórios!" });
  }
  if (professores.some(p => p.cpf === cpf && p.id != idRecebido)) {
    return res.status(400).json({ erro: "CPF já cadastrado!" });
  }
  if (professores.some(p => p.email === email && p.id != idRecebido)) {
    return res.status(400).json({ erro: "Email já cadastrado!" });
  }
  professores[index] = {
    ...professores[index],
    nome,
    cpf,
    email,
    curso,
    disciplina
  };
  res.json(professores[index]);
});

// DELETAR
router.delete('/:id', (req, res) => {
  const idRecebido = req.params.id;
  const index = professores.findIndex(p => p.id == idRecebido);
  if (index === -1) {
    return res.status(404).json({ erro: "Professor não encontrado!!!" });
  }
  professores.splice(index, 1);
  res.status(204).send();
});

module.exports = router;