//importar express
const express = require ('express')

//criar uma instância no meu backend com o express 
const app = express()

//intermediários (Middlewares)
//intermediário de LOG
//Todo requisição vai passar por ele e imprimir no terminal 
//informações da requisição
app.use((req, res, next) =>{
    console.log("time: ", new Date(). toLocaleString())
    console.log("Metodo: ", req.method)
    console.log("Rota: ", req.url)
    next()
})



//hello world
//req -> a requisição
//res -> manipulador de resposta 
//next -> chama o proximo intermediário
//mapeamento da requisição
app.get('/hello', (req, res, next) =>{
    //envio da resposta
    res.send('Hello world ')
})
//endpoint na minha API 
app.get('/pessoas', (req, res, next) =>{
    const pessoas = [
        {
            id: 1, 
            nome: "João pedro"
        }, 
        {
            id: 2, 
            nome: "Ana Paula"
        }
    ]
    res.json(pessoas)
})

// executar a  aplicação escolhendo a porta que ela vai escutar 
app.listen(3000, () => {
    console.log("Minha aplocação esta rodando em http://localhost:3000")
})