
const bodyParser = require('body-parser');

var Model = require('../Models/model');


module.exports = {

    // Redirection vers l'accueil
    Accueil : (req, res) => {
        res.render("./accueil", {user : req.session.cookie.user});
    }
   
} 

