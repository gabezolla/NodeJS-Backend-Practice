const express = require('express');
const bodyParser = require('body-parser');

const app = express(); // variável que armazena o app, qdo quisermos chamar a aplicação.

app.use(bodyParser.json());

const mensagens = ["Primeira mensagem", "Segunda mensagem"];
const port = 3000;

app.get('/mensagens', (req, res) => { // GET -> pegar informações. ENTRE ASPAS SIMPLES É A ROTA ('/' é a padrão, principal)
    res.send(mensagens.filter(Boolean));
})

app.get('/mensagens/:id', (req, res) => { //      /: para parâmetros
    const id = req.params.id-1; // parametros da requisição -> ID
    res.send(mensagens[id]);
})

app.post('/mensagens', (req, res) => { 
    const mensagem = req.body.mensagem;
    mensagens.push(mensagem);
    res.send(`Mensagem criada com sucesso: "${mensagem}"`);
});

app.put('/mensagens/:id', (req, res) => {
    const id = req.params.id-1;
    const mensagem = req.body.mensagem;
    mensagens[id] = mensagem;
    res.send(`Mensagem atualizada com sucesso: "${mensagem}"`);

});

app.delete('/mensagens/:id', (req,res) => {
    const id = req.params.id-1;
    delete mensagens[id];
    res.send(`Mensagem removida com sucesso.`);
});
 
app.listen(port, () => {
    console.info('App rodando em: localhost: '+port);
});


