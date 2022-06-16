import { prisma } from "./prisma";// importa a possibilidade de inserção 
import express from "express";
import nodemailer from "nodemailer"

const app = express();
app.use(express.json());//verificar se no corpo há JSON

const transport = nodemailer.createTransport({
    host: "smtp.mailtrap.io",
    port: 2525,
    auth: {
        user: "b7e1c14fe8aba4",
        pass: "af865f08d71f97"
    }
});


app.use

app.listen(3333, () => {
    console.log("HTTP SERVER RUNNING");
});