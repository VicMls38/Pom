//Importation 
const express = require('express');
const bodyParser = require('body-parser');

const Controller = require('../Controllers/controllerAuthentification');

var urlencodedParser = bodyParser.urlencoded({ extended: false })

//création du routeur Express pour ce module
const routeur = express.Router();
routeur.use(bodyParser.urlencoded({ extended: true }));

routeur.get('/connexion', Controller.Connexion);
routeur.post('/login' ,urlencodedParser, Controller.Login);

routeur.get('/inscription', Controller.Inscription)
routeur.post('/register' ,urlencodedParser, Controller.Register);

routeur.get('/deconnexion', Controller.Logout);
  


//Exportation du module routeur
module.exports = routeur 