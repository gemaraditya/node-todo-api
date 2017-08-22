var express = require('express');
var bodyParser = require('body-parser');

// ES 6 syntax
var {mongoose} = require('./db/mongoose');
var {Todo} = require('./models/todo');
var {User} = require('./models/user');

// init express app
var app = express();

// use middleware for body-parser
app.use(bodyParser.json());

app.post('/todos', (req,res) => {
    // create todo obj for request body
    var todo = new Todo({
        text: req.body.text
    });

    // save to mongodb, return promise
    todo.save().then((doc) => {
        // returning result doc
        res.send(doc);
    }, (e) => {
        res.status(400).send(e);
    }); 
});

// app listener
app.listen(3000, () => {
    console.log('connected to port 3000');
});