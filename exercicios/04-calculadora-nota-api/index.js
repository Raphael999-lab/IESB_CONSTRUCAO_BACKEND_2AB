//importar express
const express = require('express')
//criar uma instância 
const app = express()
 const cors = require('cors')
//habilita para chegar requisição de qualquer origem 
 app.use(cors())


//configurção e intermedíarios 
//intermediário de LOG
app.use((req, res, next) => {
console.log("##### Requisição chegou #####")
console.log("Time: ", new Date().toLocaleString)
console.log("Metodo: ", req.method)
console.log("Rota: ", req.url)
next()
})

app.get("/hello", (req, res, next)=> {
    res.send("Hello atualizado!!!")
})

//importar o roteador CalculadoraNota
const calculadoraNotaRouter = require('./routes/CalculadoraNota')
app.use("/", calculadoraNotaRouter)



//executar a aplicação 
app.listen(3000, () => {
    console.log("API rodando em http://localhost:3000")
})