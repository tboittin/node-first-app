const express = require("express")
const path = require("path")
const bodyParser = require("body-parser")

const app = express()

app.use(bodyParser.urlencoded(
    // {extended: false}
))

app.use(express.static(path.join(__dirname, "public")))

app.set("view engine", "pug")

const users = []

app.get("/", (req, res, next) => {
    res.render("form", { pageTitle: "Form", path: '/'})
})

app.post("/", (req, res, next) => {
    users.push({ user: req.body.user })
    res.redirect("/users")
})

app.get("/users", (req, res, next) => {
    res.render("users", { pageTitle: "Users", users: users, path: '/users' })
})

app.listen(3000)
