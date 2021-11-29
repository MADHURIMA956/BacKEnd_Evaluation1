const express = require('express');
const Job = require('../models/job.models');

const router = express.Router();

router.post('/', async (req, res) => {
    try{
        const jobs =  await Job.create(req.body);
        return res.status(201).send(jobs);
    }catch (e){
        return res.status(500).json({message: e.message, status : 'Failed'});
    }
})


router.get('/', async (req, res) => {
    try{
        const jobs =  await Job.find({})
        .populate('skill_id','name')
        .lean().exec();
        return res.status(201).send(jobs);
    }catch (e){
        return res.status(500).json({message: e.message, status : 'Failed'});
    }
})

router.get('/:id', async (req, res) => {
    try{
        const jobs =  await Job.findById(req.params.id).lean().exec();
        return res.send(jobs);
    }catch (e){
        return res.status(500).json({message: e.message, status : 'Failed'});
    }
})

router.patch('/:id', async (req, res) => {
    try{
        const jobs =  await Job.findByIdAndUpdate(req.params.id, req.body , {new: true}).lean().exec();
        return res.status(201).send(jobs);
    }catch (e){
        return res.status(500).json({message: e.message, status : 'Failed'});
    }
})

router.delete('/:id', async (req, res) => {
    try{
        const jobs =  await Job.findByIdAndDelete(req.params.id).lean().exec();
        return res.status(201).send(jobs);
    }catch (e){
        return res.status(500).json({message: e.message, status : 'Failed'});
    }
})

module.exports = router;