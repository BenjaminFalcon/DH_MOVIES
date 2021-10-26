const express = require ('express')
const path = require ('path')
const rutaMovie = require ('./routes/movies')
const app = express()
const publicPath = path.resolve (__dirname, './public') ;

app.listen(3000, () => { 
    console.log ("servidor corriendo en el purto 3000")
})

app.set('view engine', 'ejs')
app.set('views', "./listadoDePeliculas")

app.use (express.static(path.resolve(__dirname, './public')))



app.get('/detalle', function(req, res, next) {
    res.sendFile(path.resolve(__dirname, './Views/listadoDePeliculas.ejs'));
  });

  app.use('/', rutaMovie);
