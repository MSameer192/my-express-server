const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
    res.send('Hello World! Sami!')
})

app.get('/contact', (req, res) => {
    res.send('Contact me at @Sami192')
})

app.get('/about', (req, res) => {
    res.send('This is about')
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})