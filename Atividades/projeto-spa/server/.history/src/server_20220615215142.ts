import { prisma } from "./prisma";// importa a possibilidade de inserção 
import express from "express";
import nodemailer from "nodemailer"
import { routes } from "./routes";

const app = express();
app.use(express.json());//verificar se no corpo há JSON

app.use(routes)






app.listen(3333, () => {
    console.log("HTTP SERVER RUNNING");
});