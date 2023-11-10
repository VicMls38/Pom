//Importation de la connexion à la bdd
var db = require('../../db');


module.exports={

    Inscription:function(user_pseudo, user_email, user_password){
        var sql="INSERT INTO users(Pseudo, Email, Password ) VALUES ('"+user_pseudo+"','"+user_email+"','"+user_password+"')";
            db.query(sql, function (err, result) {
                if (err) throw err;
                console.log(result.affectedRows + " record(s) created");
              });

    },
    
    Connexion:function(callback, user_email, user_password){
        console.log("Before DB : ", user_email, user_password)
        var sql="SELECT * FROM users WHERE Email = '"+user_email+"' AND Password = '"+user_password+"'";
        db.query(sql, function (err, data, fields){
            if (err){throw err};
                console.log(data);
                return callback(data);
            
        });

    },

}