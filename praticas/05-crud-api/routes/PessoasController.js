const express = require('express')
const router = express.Router()

// mapeamento dos endpoints e a lógica 
//Lista de pessoas para simular o banco dados
let pessoas = [
    {
        id: 1, 
        nome: "João pedro", 
        cpf: "123456787",
        email: "joaozin@gmail.com",
        dataNascimento: "01/02/2000"
    },
     {
        id: 2, 
        nome: "Maria", 
        cpf: "1234433787",
        email: "marizin@gmail.com",
        dataNascimento: "02/02/2000"
    }
]

//criar 
// - post /pessoas
router.post('/pessoas', (req, res, next ) =>{

} )
// lISTAR TODOS  
// - GET /pessoas 
router.get('/pessoas', (req, res, next ) =>{
    res.json(pessoas)
} )
// buscar um 
// - GET/ pessoas 
router.get('/pessoas/:id', (req, res, next ) =>{
const idRecebido = req.params.id
const pessoa = pessoas.find(p => p .id == idRecebido)
if(!pessoa) {
    return res.status(404).json({erro: "Pessoa não encontrada!!!"})
}
    res.json(pessoa)
} )

//editar 
// - put /pessoas
router.put('/pessoas', (req, res, next ) =>{
    
} )

//deletar 
// -DELETE /pessoas 
router.delete('/pessoas', (req, res, next ) =>{
    
} )








module.exports = router