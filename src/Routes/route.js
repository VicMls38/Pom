//Importation 
const express = require('express');
const bodyParser = require('body-parser');

const Controller = require('../Controllers/controller');


var urlencodedParser = bodyParser.urlencoded({ extended: false })

//création du routeur Express pour ce module
const routeur = express.Router();
routeur.use(bodyParser.urlencoded({ extended: true }));

routeur.get('/', Controller.Accueil);

routeur.get('/connexion', Controller.Connexion);
routeur.post('/login' ,urlencodedParser, Controller.Login);

routeur.get('/inscription', Controller.Inscription)
routeur.post('/register' ,urlencodedParser, Controller.Register);
  


//Exportation du module routeur
module.exports = routeur 