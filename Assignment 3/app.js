const express = require("express")
const path = require("path")
const bodyParser = require("body-parser")

const app = express()

app.use(
    bodyParser
        .urlencoded
        // {extended: false}
        ()
)
/**
 * pour pouvoir utiliser les fichiers statiques venant de public
 */
app.use(express.static(path.join(__dirname, "public")))

app.get("/", (req, res, next) => {
    res.sendFile(path.join(__dirname, "views", "index.html"))
})

app.get("/users", (req, res, next) => {
    res.sendFile(path.join(__dirname, "views", "users.html"))
})

app.listen(3000)
