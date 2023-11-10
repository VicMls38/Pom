//Importation de la connexion à la bdd
var db = require('../../db');


module.exports={

    Connexion:function(callback, cli_mail, cli_mdp){

        var sql="SELECT * FROM users WHERE User_ID = 1";
        db.query(sql, function (err, data, fields){
            if (err){throw err};
                console.log(data);
                return callback(data);
            
        });

    },

}