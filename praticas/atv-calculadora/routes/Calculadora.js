const express = require('express');
const router = express.Router();

router.get('/somar', (req, res) => {
  const numA = Number(req.query.numA);
  const numB = Number(req.query.numB);
  if (isNaN(numA) || isNaN(numB)) {
    return res.status(400).json({ error: 'Parâmetros inválidos' });
  }
  const result = numA + numB;
  res.json({ result });
});

router.get('/subtrair', (req, res) => {
  const numA = Number(req.query.numA);
  const numB = Number(req.query.numB);
  if (isNaN(numA) || isNaN(numB)) {
    return res.status(400).json({ error: 'Parâmetros inválidos' });
  }
  const result = numA - numB;
  res.json({ result });
});

router.get('/multiplicar', (req, res) => {
  const numA = Number(req.query.numA);
  const numB = Number(req.query.numB);
  if (isNaN(numA) || isNaN(numB)) {
    return res.status(400).json({ error: 'Parâmetros inválidos' });
  }
  const result = numA * numB;
  res.json({ result });
});

router.get('/dividir', (req, res) => {
  const numA = Number(req.query.numA);
  const numB = Number(req.query.numB);
  if (isNaN(numA) || isNaN(numB)) {
    return res.status(400).json({ error: 'Parâmetros inválidos' });
  }
  if (numB === 0) {
    return res.status(400).json({ error: 'Divisão por zero não permitida' });
  }
  const result = numA / numB;
  res.json({ result });
});

router.get('/aoQuadrado', (req, res) => {
  const numA = Number(req.query.numA);
  if (isNaN(numA)) {
    return res.status(400).json({ error: 'Parâmetro inválido' });
  }
  const result = numA * numA;
  res.json({ result });
});

router.get('/raizQuadrada', (req, res) => {
  const numA = Number(req.query.numA);
  if (isNaN(numA)) {
    return res.status(400).json({ error: 'Parâmetro inválido' });
  }
  if (numA < 0) {
    return res.status(400).json({ error: 'Raiz quadrada de número negativo não é real' });
  }
  const result = Math.sqrt(numA);
  res.json({ result });
});

module.exports = router;