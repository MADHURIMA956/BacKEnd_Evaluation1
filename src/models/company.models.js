const mongoose = require('mongoose');

const Job = require('../models/job.models')

const companySchema = new mongoose.Schema({

    company_name : { type: String, required: true},
    open_job: { type:Boolean , required: true},
    job_id : [
            {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'jobs',
            required: true,
        },
    ],
},
{
    versionKey : false,
    timestamps : true
}
) ;
module.exports = mongoose.model('company', companySchema);