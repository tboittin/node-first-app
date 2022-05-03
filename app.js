const express = require('express')

const app = express()

app.use((req, res, next) => {
    console.log('In the middleware!')
    next() //Allows the request to continue to the next middleware in line
})

// app.use('/', (req, res, next) => {
//     console.log('In the another middleware!')
//     res.send('<h1>This always run</h1>')
//     next()
// })

app.use('/hello', (req, res, next) => {
    console.log('In the another middleware!')
    res.send('<h1>Hello tout court</h1>')
})

app.use('/', (req, res, next) => {
    console.log('In the another middleware!')
    res.send('<h1>Hello from express</h1>')
})

app.listen(3000)
