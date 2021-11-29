const mongoose = require('mongoose');

const Skill = require('../models/skill.model')

const jobSchema = new mongoose.Schema({

    job_name : { type: String, required: true},
    job_preference: { type: String, required: true},
    rating: { type: Number, required: true},
    city: { type: String, required: true},
    notice_period : { type: String, required: true},
    skill_id : [
        {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'skills',
        required: true,
      },
    ],
},
{
    versionKey : false,
    timestamps : true
}
) ;
module.exports = mongoose.model('jobs', jobSchema);