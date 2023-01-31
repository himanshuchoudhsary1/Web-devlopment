let express = require('express');
let app = express();
let port = 8000;
let path =require('path');
let hbs = require('hbs');
require('./db/conn');

let viewspath = path.join(__dirname,'../views')
app.set('view engine','hbs');
app.set('views','viewspath');



app.get('/', function(req,res){
    res.send("Hello World");
})

app.listen(port, function(){
    console.log(`listening at ${port}`);
})