const express = require('express')
const app = express();
const hbs = require('hbs');
require('./hbs/helpers')

const port = process.env.PORT || 3000;


app.use(express.static(__dirname + '/public'))

//expres hbs
hbs.registerPartials(__dirname + '/views/parciales');
app.set('view engine', 'hbs');

//helpers

app.get('/', (req, res) => {


    res.render('home', {
        nombre: 'andres castro',

    });

});

app.get('/about', (req, res) => {


    res.render('about');

});



app.listen(port, () => {
    console.log(`escuchando peticiones en el puerto ${3000}`);

})