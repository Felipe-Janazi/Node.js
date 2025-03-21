import express from "express"

// Instância de express e executando
const app = express()
// Fazendo alteração para executar o express.json em todas as req, assim vai ser convertido pra json para inserirmos 
app.use(express.json())

const livros = [
    {
        id: 1,
        titulo: "O senhor dos anéis"
    },
    {
        id: 2,
        titulo: "O hobbit"
    }
]

function buscaLivro(id) {
    // Buscando dentro do array por index
    return livros.findIndex(livro => {
        // Retornando o id do livro que seja igual ao id informado para essa função
        return livro.id === Number(id)
    })
}
// O express vai ser o responsável de escutar e cuidar das rotas criadas e solicitadas
app.get("/", (req, res) => {
    // O Status e o que vai ser passado na resposta
    res.status(200).send("Curso de Node.Js");
})

app.get("/livros", (req, res) => {
    res.status(200).json(livros);
})

app.get("/livros/:id", (req, res) => {
    // Passando o id como um parâmetro da rota
    const index = buscaLivro(req.params.id)
    res.status(200).json(livros[index])
})

app.post("/livros", (req, res) => {
    livros.push(req.body)
    res.status(201).send("Livro cadastrado com sucesso!")
})

app.put("/livros/:id", (req, res) => {
    const index = buscaLivro(req.params.id)
    livros[index].titulo = req.body.titulo
    res.status(200).json(livros)
})

// app.delete("/livros", (req, res) => {
//     livros.push(req.body)
//     res.status(201).send("Livro cadastrado com sucesso!")
// })



export default app