
const bodyParser = require('body-parser');

var Model = require('../Models/modelAuthentification');


module.exports = {

    Inscription : (req, res) => {
        res.render("./inscription");
    },
    Register : (req, res) => {
        let user_pseudo = req.body.pseudo;
        let user_email = req.body.email;
        let user_password = req.body.password;
        let user_conf_password = req.body.conf_password;

        Model.VerifPseudoInscription(function(lignes_pseudo){
            Model.VerifEmailInscription(function(lignes_email) {
                try{
                    if (lignes_pseudo.length == 0) {
    
                        if (lignes_email.length == 0) {
        
                            let ligne_email = JSON.stringify(lignes_email);
                            ligne_email = JSON.parse(ligne_email);
        
        
                            if(user_password == user_conf_password) {
                                Model.Inscription(user_pseudo, user_email, user_password)
                                res.redirect("./connexion");
                            }else{
                                res.render("./inscription", { error: "Les mots-de-passes ne correspondent pas !" });
                            }
        
                            res.render("./accueil", { user: req.session.cookie.user });
                        } else {
                            res.render("./inscription", { error: "L'email existe déjà !" });
                        }
                    }else{
                        res.render("./inscription", { error: "Ce pseudo est déjà utilisé !" });
                    }
                } catch (error) {
                    // Log the error
                    console.error("Error in login process:", error);
                    // Send an error response
                    res.status(500).send("Internal Server Error");
                }
            }, user_email);
        }, user_pseudo);
       
    },
  

    Connexion : (req, res) => {
        res.render("./connexion");
    },
    Login: (req, res) => {
        
        try {
                    
            let user_email = req.body.email;
            let user_password = req.body.password;
    
            console.log("Connexion : ", user_email, user_password);
    
            Model.Connexion(function (lignes) {
                console.log("After DB query:", req.session);
                if (lignes.length > 0) {
                    console.log(user_email);
                    let ligne = JSON.stringify(lignes);
                    ligne = JSON.parse(ligne);
    
                    /* Mise en session des données user */
                    req.session.cookie.user = {
                        pseudo: ligne[0].Pseudo,
                        email: ligne[0].Email,
                    };
    
                    console.log("After setting session user:", req.session.cookie.user);
    
                    res.render("./accueil", { user: req.session.cookie.user });
                } else {
                    res.render("./connexion", { error: "L'email ou le mot de passe est incorrect !" });
                }
            }, user_email, user_password);

        } catch (error) {
            // Log the error
            console.error("Error in login process:", error);
            // Send an error response
            res.status(500).send("Internal Server Error");
        }
    }
    
} 

