var express = require('express');
var app = express();
const fileUpload = require('express-fileupload');
// Enable file upload

// routes
const dataRoute = require("./routes/data");

// Decode json
app.use(express.json());

app.use(fileUpload({
    createParentPath: true
}));

// Headers
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    next();
});

// respond with "hello world" when a GET request is made to the homepage
app.use(dataRoute);

app.listen(3000);

