const express = require("express")
const path = require("path")
const app = express()
const port = 3001

app.use( express.static(path.join(__dirname, "../public")))


app.listen(port, () => console.log("Salió bien"))


app.get("/", (req, res) =>{
    res.sendFile(path.join(__dirname, "views", "home.html" ))
 })

app.get("/register", (req, res) => {
    res.sendFile(path.join(__dirname, "views", "register.html" ))
})

app.get("/login", (req, res) =>{
    res.sendFile(path.join(__dirname, "views", "login.html" ))
 })
