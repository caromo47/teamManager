let mongoose = require('mongoose');
let Player = mongoose.model("Player");

module.exports = {
	index: (req,res)=>{
		console.log("hit players.index");
		Player.find().exec((err,players)=>{
			if(err){
				console.log("something went wrong");
				res.json(err);
			}else{
				console.log("gottem");
				res.json(players);
			}
		})
	},
	create: (req,res)=>{
		console.log("hit players.create");
		Player.create(req.body, (err, createdPlayer)=>{
			if(err){
				console.log("something went wrong");
				res.json(err);
			}else{
				console.log("successfully created exam");
				res.json(createdPlayer);
			}
		})
	},

	delete: (req, res) => {
		console.log('hit delete in conrrollers')
		console.log(req.params.id);
		Player.findByIdAndRemove(req.params.id, (err, deletedPlayer) => {
			if(err) {
				console.log('error');
				res.json(err)
			} else {
				console.log('success');
				res.json(deletedPlayer)
			}

		})
	}


}
