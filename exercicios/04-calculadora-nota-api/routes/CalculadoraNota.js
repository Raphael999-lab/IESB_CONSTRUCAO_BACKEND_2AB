const express = require('express')
const router = express.Router()

// mapeamento das rotas e implementar a lógica 
// uma rota para calcular a notaA1 
router.get("/calculadora/notaA1", (req, res, next) => {
    const exercicio = parseFloat (req.query.exercicio)
    const trabalho = parseFloat (req.query.trabalho)
    const prova = parseFloat (req.query.prova)

//calido se ele mandou os parametros e se estão dentro do intervalo 
if(isNaN(exercicio) || isNaN(trabalho) || isNaN(prova)){
    return res.status(400).json({ erro:"Notas invalidas!!!"})
}
if(exercicio < 0 ||
   exercicio > 1 ||
   trabalho < 0 ||
   trabalho > 3 || 
   prova <0 ||
   prova >6
){
    return res.status(400).json({error: "Nota fora do intervalo"})
}

    const notaA1 = exercicio + trabalho + prova

    res.json(notaA1)
})


//Uma rota para calcular a notaA2 
router.get("/calculadora/notaA2", (req, res, next) => {
    const exercicio = parseFloat (req.query.exercicio)
    const trabalho = parseFloat (req.query.trabalho)
    const prova = parseFloat (req.query.prova)

//calido se ele mandou os parametros e se estão dentro do intervalo 
if(isNaN(exercicio) || isNaN(trabalho) || isNaN(prova)){
    return res.status(400).json({ erro:"Notas invalidas!!!"})
}
if(exercicio < 0 ||
   exercicio > 1 ||
   trabalho < 0 ||
   trabalho > 3 || 
   prova <0 ||
   prova >6
){
    return res.status(400).json({error: "Nota fora do intervalo"})
}

    const notaA2 = exercicio + trabalho + prova

    res.json(notaA2)
})



//Uma rota para calcular a Média final
router.get("/calculadora/media", (req, res, next) => {
    const notaA1 = parseFloat(req.query.notaA1)
     const notaA2 = parseFloat(req.query.notaA2)

if(isNaN(notaA1) || isNaN(notaA2)) {
    return res.status(400).json({ erro: "Notas invalidas"})
}
if(notaA1 < 0 || notaA1 > 10 || notaA2 < 0 || notaA2 > 10){
    return res.status(400).json({ erro: "Nota fora do intevalo!!"})
}
const Media = (notaA1 * 0.4) + (notaA2 * 0.6)
res.json({media})
})




//exporto o roteador 
module.exports = router