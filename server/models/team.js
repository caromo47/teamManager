let mongoose = require('mongoose');
let PlayerSchema = mongoose.Schema({
	name: {type:String, required:true},
	position: {type: String, required:true}
});
mongoose.model('Player', PlayerSchema);
