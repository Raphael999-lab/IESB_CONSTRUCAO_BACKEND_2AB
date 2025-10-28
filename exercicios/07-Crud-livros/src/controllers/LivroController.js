const express = require('express');
const router = express.Router();
const Livro = require('../models/Livro');
const validateID = require('../validators/IDValidator');
const { validateCreate, validateUpdate } = require('../validators/LivroValidator');

// POST /livros
router.post('/livros', validateCreate, async (req, res) => {
  try {
    const livro = await Livro.create(req.body);
    res.status(201).json(livro);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao criar livro' });
  }
});

// GET /livros
router.get('/livros', async (req, res) => {
  try {
    const livros = await Livro.find();
    res.json(livros);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao listar livros' });
  }
});

// GET /livros/:id
router.get('/livros/:id', validateID, async (req, res) => {
  try {
    const livro = await Livro.findById(req.params.id);
    if (!livro) return res.status(404).json({ error: 'Livro não encontrado' });
    res.json(livro);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao buscar livro' });
  }
});

// PUT /livros/:id
router.put('/livros/:id', validateID, validateUpdate, async (req, res) => {
  try {
    const livro = await Livro.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true
    });
    if (!livro) return res.status(404).json({ error: 'Livro não encontrado' });
    res.json(livro);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao atualizar livro' });
  }
});

// DELETE /livros/:id
router.delete('/livros/:id', validateID, async (req, res) => {
  try {
    const livro = await Livro.findByIdAndDelete(req.params.id);
    if (!livro) return res.status(404).json({ error: 'Livro não encontrado' });
    res.json({ message: 'Livro removido com sucesso' });
  } catch (error) {
    res.status(500).json({ error: 'Erro ao remover livro' });
  }
});

module.exports = router;