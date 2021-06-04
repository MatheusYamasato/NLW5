import express from 'express';
import { createServer } from 'http';
import { Socket, Server } from 'socket.io';
import './database';
import { routes } from "./routes";
import path from 'path';

const app = express();
const http = createServer(app); // Criando protocolo HTTP
const io = new Server(http); // Criando protocolo do SOCKET (WS)


app.use(express.static(path.join(__dirname, '..', 'public')))
app.set("views", path.join(__dirname, '..', 'public'))
app.engine("html", require("ejs").renderFile)
app.set("view engine", "html")
app.use(express.json())
app.use(routes)
app.get('/pages/client', (req, res) => res.render('html/client.html'))
app.get('/pages/admin', (req, res) => res.render('html/admin.html'))

io.on("connection", (socket: Socket) => console.log("Se conectou", socket.id))

export { http, io }