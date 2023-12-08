
const bodyParser = require('body-parser');

var Model = require('../Models/model');


module.exports = {

    // Redirection vers l'accueil

    Index : (req, res) => {
        res.render("./index");
    },

    Accueil : (req, res) => {
        res.render("./accueil", {user : req.session.cookie.user});
    }
   
} 

