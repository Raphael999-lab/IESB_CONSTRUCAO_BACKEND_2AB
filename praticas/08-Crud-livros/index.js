// index.js

require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');

const app = express();
const port = 3000;

app.use(express.json());

// Conexão com o MongoDB Atlas
mongoose.connect(`mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@${process.env.DB_HOST}/${process.env.DB_NAME}?retryWrites=true&w=majority`)
  .then(() => console.log('Conectado ao MongoDB Atlas'))
  .catch(err => console.error('Erro ao conectar ao MongoDB:', err));

// Schema do Livro
const bookSchema = new mongoose.Schema({
  titulo: { type: String, required: true },
  autor: { type: String, required: true },
  editora: { type: String, required: true },
  ano: { type: Number, required: true },
  preco: { type: Number, required: true }
});

const Book = mongoose.model('Book', bookSchema);

// Endpoint para criar um livro (CREATE)
app.post('/books', async (req, res) => {
  try {
    const book = new Book(req.body);
    await book.save();
    res.status(201).json(book);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Endpoint para listar todos os livros (READ - all)
app.get('/books', async (req, res) => {
  try {
    const books = await Book.find();
    res.json(books);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Endpoint para buscar um livro por ID (READ - by id)
app.get('/books/:id', async (req, res) => {
  try {
    const book = await Book.findById(req.params.id);
    if (!book) return res.status(404).json({ message: 'Livro não encontrado' });
    res.json(book);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Endpoint para atualizar um livro por ID (UPDATE)
app.put('/books/:id', async (req, res) => {
  try {
    const book = await Book.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
    if (!book) return res.status(404).json({ message: 'Livro não encontrado' });
    res.json(book);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Endpoint para remover um livro por ID (DELETE)
app.delete('/books/:id', async (req, res) => {
  try {
    const book = await Book.findByIdAndDelete(req.params.id);
    if (!book) return res.status(404).json({ message: 'Livro não encontrado' });
    res.json({ message: 'Livro removido com sucesso' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});