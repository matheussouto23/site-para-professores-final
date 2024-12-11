const express = require('express');
const path = require('path');
const app = express();
const PORT = 3000;

// Servir arquivos estáticos
app.use(express.static(path.join(__dirname, 'static')));

// Rota principal
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'templates', 'index.html'));
});

// Rota para professor
app.get('/professor', (req, res) => {
    res.sendFile(path.join(__dirname, 'templates', 'professor.html'));
});

// Iniciar o servidor
app.listen(PORT, () => {
    console.log(`Servidor Node.js rodando em http://localhost:${PORT}`);
});
