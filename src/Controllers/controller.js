
const bodyParser = require('body-parser');


module.exports = {

    // Redirection vers l'accueil
    Accueil : (req, res) => {
        res.render("./accueil");  
    }
} 

