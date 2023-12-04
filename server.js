const express = require('express');
const path = require('path');

/* ROUTES */
const Routeur = require('./src/Routes/route');

const app = express();

app.set('view engine', 'ejs');

const pathToViews = path.join(__dirname, 'src');
app.set('views', path.join(pathToViews, 'Views'));

// Configuration pour servir les fichiers statiques, y compris le fichier service-worker.js
app.use(express.static('public', { extensions: ['html', 'js'] }));

/* Gérer les routes privées et publiques prochainement avec les JWT */

/* PUBLIC ROUTES */
app.use('/', Routeur);

/* PRIVÉE ROUTES */

const port = 3999;
const host = '0.0.0.0';
app.listen(port, host, () => {
  console.log(`Example app listening on port ${port}`);
});
