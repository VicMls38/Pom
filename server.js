const express = require('express');
const path = require('path');

const session = require('express-session');
const cookieParser = require('cookie-parser');

/* ROUTES */
const Routeur = require('./src/Routes/route');
const RouteurAuthentification = require('./src/Routes/routeAuthentification');

const app = express();

app.use(cookieParser());

app.use(session({
    secret: 'uyaraeazeèuazcepazetazepzècgvazezaezea',
    resave: false,
    saveUninitialized: true,
    cookie: {}
}));

// Ajoutez cette ligne pour servir les fichiers statiques de Bootstrap
app.use('/bootstrap', express.static(path.join(__dirname, 'node_modules/bootstrap/dist')));

app.set('view engine', 'ejs');

path_to_view = path.join(__dirname, 'src');
app.use('/public', express.static(path.join(__dirname, 'public')));

app.set('views', path.join(path_to_view, 'Views'));



/* PUBLIC ROUTES */
app.use('/', Routeur);
app.use('/authentification', RouteurAuthentification);

/* PRIVÉE ROUTES */

const port = 3999;
const host = "0.0.0.0";
app.listen(port, host, () => {
  console.log(`Example app listening on port ${port}`);
});
