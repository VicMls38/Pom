
const bodyParser = require('body-parser');

var Model = require('../Models/model');


module.exports = {

    Manifest : (req, res) => {
        res.setHeader('Content-Type', 'application/json');
        res.sendFile(path.join(__dirname, 'manifest.json'));
    },

    // Redirection vers l'accueil
    Accueil : (req, res) => {
        Model.Connexion(function(lignes){
            console.log(lignes);
        res.render("./accueil", {index : lignes});
        });
        //res.render("./accueil");  
    },

    Connexion : (req, res) => {
        Model.Connexion(function(lignes){
            console.log(lignes);
        res.render("./connexion");
        });
    },
} 

