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
    VerifPseudoInscription: function (callback, user_pseudo) {
        console.log("Before DB : ", user_pseudo);
        var sql = "SELECT Pseudo FROM users WHERE Pseudo = '"+user_pseudo+"' ";
        db.query(sql, function (err, data, fields) {
            if (err) {
                console.error("Error in database query:", err);
                callback([]); // Return an empty array in case of an error
            } else {
                console.log("Data from DB:", data);
                callback(data);
            }
        });
    },
    VerifEmailInscription: function (callback, user_email) {
        console.log("Before DB : ", user_email);
        var sql = "SELECT Email FROM users WHERE Email = '"+user_email+"' ";
        db.query(sql, function (err, data, fields) {
            if (err) {
                console.error("Error in database query:", err);
                callback([]); // Return an empty array in case of an error
            } else {
                console.log("Data from DB:", data);
                callback(data);
            }
        });
    },
    
    Connexion: function (callback, user_email, user_password) {
        console.log("Before DB : ", user_email, user_password);
        var sql = "SELECT * FROM users WHERE Email = '" + user_email + "' AND Password = '" + user_password + "'";
        db.query(sql, function (err, data, fields) {
            if (err) {
                console.error("Error in database query:", err);
                callback([]); // Return an empty array in case of an error
            } else {
                console.log("Data from DB:", data);
                callback(data);
            }
        });
    },
    

}