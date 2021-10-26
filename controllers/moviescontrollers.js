const db = require('../database/models/Movie');



let moviescontrollers = {
    list: function(req, res) {
db.movies.findAll()
.then(function(movies){
    res.render('listadoDePeliculas', {movies:movies})
})
},
add:function(req, res) {

},
create:function(req, res) {

},
delete:function(req, res) {

}
}