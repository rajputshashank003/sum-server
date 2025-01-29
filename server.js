const express = require("express");
const app = express();

app.use(express.json());


app.get("/", (req,res) => {
    res.status(200).json({
        "success" : true,
        "data" : "server working "
    })
})

app.get("/sum", (req, res) => {
    const a = req.query.a;
    const b = req.query.b;
    res.status(200).json({
        "success" : true ,
        "res" : parseInt(a) + parseInt(b)
    })
})

app.listen(8080, () => {
    console.log("server listening port 8080");
})