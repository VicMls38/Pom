
const bodyParser = require('body-parser');

var Model = require('../Models/model');


module.exports = {

    // Redirection vers l'accueil
    Accueil : (req, res) => {
        Model.Connexion(function(lignes){
            console.log(lignes);
        res.render("./accueil", {index : lignes});
        });
        //res.render("./accueil");  
    },

    Inscription : (req, res) => {
        res.render("./inscription");
    },
    Register : (req, res) => {
        let user_pseudo = req.body.pseudo;
        let user_email = req.body.email;
        let user_password = req.body.password;
        let user_conf_password = req.body.conf_password;
      
        Model.Inscription(user_pseudo, user_email, user_password)
        res.render("./connexion");
    },
  

    Connexion : (req, res) => {
        res.render("./connexion");
    },
    Login : (req, res) => {

        try{
            let user_email = req.body.email;
            let user_password = req.body.password;

            console.log("Connexion : ", user_email, user_password)

            Model.Connexion(function(lignes){
                if(lignes != 0){
                    console.log(user_email)
                    let ligne = JSON.stringify(lignes);
                    ligne = JSON.parse(ligne);

                    const user = {
                        email: ligne[0].email,
                        password: ligne[0].password
                    }
                    console.log("user : " + user);

                res.render("./accueil", {index : lignes});
                }
            }, user_email, user_password);
        }catch (error) {
            // Log the error
            console.error("Error in login process:", error);
            // Send an error response
            res.status(500).send("Internal Server Error");
        }
        
    }
} 

