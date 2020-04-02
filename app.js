/**
 * Inicializacion de paquetes 
 */
const express = require('express');
const config = require("./src/core/config.dev");
const cors = require("cors");
const http = require("http");
const bodyParser = require('body-parser')

/**
 * Obtenemos configuraciones
 */
const {
    serverPort, serverHost
} = config;

const usuarios = require("./src/endpoint/usuarios/usuario.route");

var app = express();
const server = http.Server(app);

app.use(
    cors({
        origin: '*',
        methods: ['GET', 'PUT', 'POST', 'DELETE']
    })
)

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(usuarios);

server.timeout = 600000;
server.listen(serverPort, serverHost, () => { console.log('Conectado ........'); });
