const mongoose = require('mongoose');


const skillSchema = new mongoose.Schema({

    name : { type: String, required: true},
      
},
{
    versionKey : false,
    timestamps : true
}
) ;
module.exports = mongoose.model('skills', skillSchema);