const express = require('express');
const app = express();

app.set("view engine", "ejs");

app.get("/", function (req, res) {
    const items = [
        { 
            initial: "E",
            message: "asy to learn"
        },
        { 
            initial: "J",
            message: "ust an example"
        },
        { 
            initial: "S",
            message: "uper simple"
        },
    ];

    const subtitleExample = "Legenda gerada a partir do arquivo server.js para fins de aprendizado."

    res.render("pages/index", {
        initials: items,
        subtitle: subtitleExample
    })
})

app.get("/sobre", function (req, res) {
    res.render("pages/aboutme")
})

app.listen(8080);
console.log("rodando...")