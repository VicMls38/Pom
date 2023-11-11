const express = require('express');
const path = require('path');

const session = require('express-session');
const cookieParser = require('cookie-parser');

/* ROUTES */
const Routeur = require('./src/Routes/route');
const RouteurAuthentification = require('./src/Routes/routeAuthentification');

const app = express()


app.use(cookieParser());

app.use(session({
    secret: 'uyaraeazeèuazcepazetazepzècgvazezaezea',
    resave: false,
    saveUninitialized: true,
    cookie: {}
}));


app.set('view engine', 'ejs');

path_to_view = path.join(__dirname, 'src')
app.set('views', path.join(path_to_view, 'Views'));


/* Gérer les routes privées et public prochainement avec les JWT */

/* PUBLIC ROUTES */
app.use('/', Routeur)
app.use('/authentification', RouteurAuthentification)


/* PRIVÉE ROUTES */


const port = 3000
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})