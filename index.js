var express = require('express');
var bodyParser = require('body-parser');
var parser = bodyParser.urlencoded({extended : false})
var app = express();

app.use(express.static('public'));
app.set('view engine', 'ejs');
app.set('views', './views');
app.listen(3000);

app.get('/', function(req, res){
    res.render('home');
})
var mang = ['IOS', 'PHP', 'Android'];

app.get('/getNote', function(req, res){
    res.send(mang);
})

app.post('/add', parser, function(req, res){
    var note = req.body.note;
    mang.push(note);
    res.send(mang);
})

app.post('/delete', parser, function(req, res){
    var key = req.body.id;
    mang.splice(key, 1);
    res.send(mang)
})

app.post('/save', parser, function(req, res) {
    var key = req.body.id;
    var value = req.body.txtEdit;
    mang[key] = value
    res.send(mang)
})