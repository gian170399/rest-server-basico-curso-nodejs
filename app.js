require('dotenv').config();

const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('hola amigos');
});
app.listen(process.env.port, () => {
    console.log('esuchando puerto ', process.env.port);
});