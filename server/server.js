const express = require('express');
const app = express()

app.get("/api", (req, res) => {
    res.json({"user":["UserOne","UserTwo","UserThree","UserFour"]})
})

app.listen(5000, () => {console.log("Server is running on port 5000")})