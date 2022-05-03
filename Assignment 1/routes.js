const requestHandler = (req, res) => {
    const url = req.url
    const method = req.method
    if (url === "/") {
        const homePageBody =
            "<body>" +
            "<h1>Hello from Thomas 2nd Node.js Server!</h1>" +
            "<form action='/create-user' method='POST'>" +
            "<input type='text' name='new-user'></input>" +
            "<button type='submit'>Send</button>" +
            "</form>" +
            "</body>"
        res.setHeader("Content-Type", "text/html")
        res.write("<html>")
        res.write("<head><title>Home Page</title></head>")
        res.write(homePageBody)
        res.write("</html>")
        res.end()
    }
    if (url === "/users") {
        res.setHeader("Content-Type", "text/html")
        res.write("<html>")
        res.write("<head><title>Users List</title></head>")
        res.write("<body><ul><li>First User</li><li>Brigitte</li></ul></body>")
        res.write("</html>")
        return res.end()
    }
    if (url === "/create-user" && method === "POST") {
        req.on("data", user => {
            console.log(user.toString().split('=')[1])
        })
        return req.on("end", () => {
            res.statusCode = 302
            res.setHeader("Location", "/")
            return res.end()
        })
    }
}

module.exports = requestHandler
