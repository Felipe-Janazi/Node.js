// Chamando um arquivo criado localmente
import app from "./src/app.js"

const PORT = 3000

// Informa quando estiver escutando algo, como por exemplo alguém se conectando ao servidor
app.listen(PORT, () => {
    console.log("Servidor escutando!")
})

