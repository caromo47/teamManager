let Players = require('./../controllers/teams');
let path = require('path');

module.exports = (app)=>{
	app.get('/players', Players.index);
	app.post('/players/addplayer', Players.create);
	app.delete('/players/delete/:id', Players.delete);


	app.all("*", (req,res,next) => {
        res.sendFile(path.resolve("./public/dist/index.html"))
    });
	// app.get('/players/update', Players.update);
}
