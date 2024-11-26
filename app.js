const express = require('express');
const path = require('path'); 
const app = express();

app.use(express.static('public')); 
app.set('view engine', 'ejs'); 
app.set('views', path.join(__dirname, 'views')); 

app.get('/', (req, res) => {
    res.render('index'); 
});

app.get('/cadastrar-pokemon', (req, res) => {
    res.render('cadastrar_pokemon'); 
});

app.get('/cadastrar-treinador', (req, res) => {
    res.render('cadastrar_treinador'); 
});

app.use((req, res) => {
    res.status(404).send('<h1>Página não encontrada</h1>');
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});
