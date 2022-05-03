const express = require('express')

const app = express()

app.use((req, res, next) => {
    console.log('1st middleware')
    next()
})

// app.use((req, res, next) => {
//     res.send('Response')
//     next()
// })

app.use('/users', (req, res, next) => {
    res.send('Dummy Users Response')
})

app.use('/', (req, res, next) => {
    res.send('Dummy Response')
})

app.listen(3000)