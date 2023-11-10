const express = require('express');
const path = require('path');

/* ROUTES */
const Routeur = require('./src/Routes/route');


const app = express()

app.set('view engine', 'ejs');

path_to_view = path.join(__dirname, 'src')
app.set('views', path.join(path_to_view, 'Views'));


app.use('/', Routeur)


const port = 3000
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})