import express from 'express'
import router from './src/router/cliente.js'
import routera from './src/router/atendimento.js'
import database from './src/Config/database.js';

const app = express();
app.use(express.json())

app.use("/api/cliente", router)
app.use("/api/atendimento", routera)


database.db
    .sync({ force: false })
    .then((_) => {  
        app.listen(3000, () => {
            console.log("Servidor ouvind na porta 3000")
        })
    })
    .catch((e) => {
        console.log(e)
    })