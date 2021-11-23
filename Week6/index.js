const express = require('express')
const app = express()
const port = 3000

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