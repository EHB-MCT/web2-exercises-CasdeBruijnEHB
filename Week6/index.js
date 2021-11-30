const express = require('express')
const app = express()
const port = 3000
/*
====================================
==============EXC 1=================
====================================
app.use(express.static("public"));

app.get('/', (req, res) => {
    console.log("local root called");
    res.redirect('/info.html')
})
app.get('/randomtext', (req, res) => {
    console.log("Text called");
    res.send('Swish swish!')
})
app.get('/getdata', (req, res) => {
    let exampledata = {
        name: "Cas",
        sport: "basketball",
        jerseynumber: 24
    }
    res.send(exampledata)
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})
*/
/*
====================================
==============EXC 2=================
====================================
*/
app.use(express.static("public"));

app.get('/', (req, res) => {
    console.log("local root called");
    res.redirect('/info.html')
})
app.get('/api/boardgames', (req, res) => {
    fetch('./boardgames.json')
        .then(response => response.json())
        .then(data => {
            console.log("aye");
            res.send(data);  
        })
})
app.get('/api/boardgame', (req, res) => {
    fetch('./api/boardgame?ID=120677')
        .then(response => response.json())
        .then(data => {
            res.send(data);
        })
})
app.post('/api/saveboardgame', (req, res) => {
    fetch('/api/boardgame?ID=120677')
        .then(response => response.json())
        .then(data => {
            res.send(data);
        })
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})