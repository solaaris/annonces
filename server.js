"use strict";
var express     = require('express'),
    bodyParser  = require('body-parser'),
    fs          = require('fs'),
    app         = express(),
    annonces   = JSON.parse(fs.readFileSync('data/annonces.json', 'utf-8'))

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//The dist folder has our static resources (index.html, css, images)
app.use(express.static(__dirname + '/dist/annonces')); 

app.get('/api/annonces', (req, res) => {
    res.json(annonces);
});

app.get('/api/annonce/:id', (req, res) => {
    let annonceId = +req.params.id;
    let selectedAnnonce = {};
    for (let annonce of annonces) {
        if (annonce.id === annonceId) {
           selectedAnnonce = annonce;
           break;
        }
    }  
    res.json(selectedAnnonce);
});


app.get('/api/annonces/categorie/:cat', (req, res) => {
    let categorie = +req.params.cat;
    let selectedAnnonces = [];
    for (let annonce of annonces) {
        if (annonce.categorie === categorie) {
            selectedAnnonces.push(annonce);
        }
    }  
    res.json(selectedAnnonces);
});


app.post('/api/annonces', (req, res) => {
    let postedAnnonces = req.body;
    let maxId = Math.max.apply(Math,annonces.map((annonce) => annonce.id));
    postedAnnonces.id = ++maxId;
    annonces.push(postedAnnonces);
    res.json(postedAnnonces);
});

app.put('/api/annonces/:id', (req, res) => {
    let putAnnonce = req.body;
    let id = +req.params.id;
    let status = false;


    for (let i=0,len=annonces.length;i<len;i++) {
        if (annonces[i].id === id) {
            annonces[i] = putAnnonce;
            status = true;
            break;
        }
    }
    res.json({ status: status });
});

app.delete('/api/annonces/:id', function(req, res) {
    let annonceId = +req.params.id;
    for (let i=0,len=annonces.length;i<len;i++) {
        if (annonces[i].id === annonceId) {
            annonces.splice(i,1);
           break;
        }
    }  
    res.json({ status: true });
});


app.post('/api/auth/login', (req, res) => {
    var userLogin = req.body;
    //Add "real" auth here. Simulating it by returning a simple boolean.
    res.json(true);
});

app.post('/api/auth/logout', (req, res) => {
    res.json(true);
});

// redirect all others to the index (HTML5 history)
app.all('/*', function(req, res) {
    res.sendFile(__dirname + '/dist/index.html');
});

app.listen(3000);

console.log('Express listening on port 3000.');

//Open browser
var opn = require('opn');

opn('http://localhost:3000').then(() => {
    console.log('Browser closed.');
});


