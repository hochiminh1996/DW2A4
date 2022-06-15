import express from "express"

const app = express();

// 


app.get("/users", (req, res) => {
    return res.send("Olá, mundo")

})

app.listen(3333, () =>{
    console.log("HTTP SERVER RUNNING");
});