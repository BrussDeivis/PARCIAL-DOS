const basicPath = require("/techniques/basicPath.js");
const express = require("express")

const app = express()
app.use( express.json() )
const port = 8080
app.get('/', (req, res) => { res.send("I am alive"); })

app.get('/basic_path', (req, res) => { 
    res.json(basicPath.calculate(1,2,3));
})


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

