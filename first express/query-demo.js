//Name:
//App Name:
//Description:

const express = require('express')
const app = express()

app.get('/', (req,res) => {
    console.log(req.query)
})
app.listen(8080)