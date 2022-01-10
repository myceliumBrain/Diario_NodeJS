const express = require('express')
const path = require('path')
const apiRoute = require('./routes/api')

const app = express();
const PORT = 5000;



app.use('/api', apiRoute)

/*passando a pagina estatica para o usuario*/
app.use('/', express.static(path.join(__dirname, 'public')))


app.listen(PORT, ()=>{
    console.log("Servidor rodando... porta: ", PORT)
})

