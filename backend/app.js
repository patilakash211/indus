const express = require('express');
const app = express();

app.get("/", (request,response,next) => {
        console.log("Hello");
        next();
    }
)
app.post('/books', (request,response,next) => {
    console.log("Hello");
    response.json(request.body)
    response.send("success")
}
)

module.exports = app;