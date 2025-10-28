const yup = require('yup');

// Schema para criação (todos obrigatórios)
const createLivroSchema = yup.object().shape({
  titulo: yup.string().required('Título é obrigatório'),
  autor: yup.string().required('Autor é obrigatório'),
  editora: yup.string().required('Editora é obrigatória'),
  ano: yup.number()
    .required('Ano é obrigatório')
    .integer('Ano deve ser um número inteiro')
    .min(1440, 'Ano muito antigo')
    .max(new Date().getFullYear(), 'Ano não pode ser no futuro'),
  preco: yup.number()
    .required('Preço é obrigatório')
    .positive('Preço deve ser positivo')
});

// Schema para atualização (todos opcionais)
const updateLivroSchema = yup.object().shape({
  titulo: yup.string(),
  autor: yup.string(),
  editora: yup.string(),
  ano: yup.number()
    .integer('Ano deve ser um número inteiro')
    .min(1440, 'Ano muito muito antigo')
    .max(new Date().getFullYear(), 'Ano não pode ser no futuro'),
  preco: yup.number().positive('Preço deve ser positivo')
});

// Middleware de validação
const validate = (schema) => async (req, res, next) => {
  try {
    await schema.validate(req.body, { abortEarly: false });
    next();
  } catch (error) {
    const errors = error.inner.map(err => ({
      field: err.path,
      message: err.message
    }));
    res.status(400).json({ errors });
  }
};

module.exports = {
  validateCreate: validate(createLivroSchema),
  validateUpdate: validate(updateLivroSchema)
};