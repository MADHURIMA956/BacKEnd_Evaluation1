const express = require('express');
const Company = require('../models/company.models');

const router = express.Router();

router.post('/', async (req, res) => {
    try{
        const Companys =  await Company.create(req.body);
        return res.status(201).send(Companys);
    }catch (e){
        return res.status(500).json({message: e.message, status : 'Failed'});
    }
})


router.get('/', async (req, res) => {
    try{
        const Companys =  await Company.find({})
        .populate('job_id' ,'job_name' )      
        .lean().exec();
        return res.status(201).send(Companys);
    }catch (e){
        return res.status(500).json({message: e.message, status : 'Failed'});
    }
})

router.get('/:id', async (req, res) => {
    try{
        const Companys =  await Company.findById(req.params.id).lean().exec();
        return res.send(Companys);
    }catch (e){
        return res.status(500).json({message: e.message, status : 'Failed'});
    }
})

router.patch('/:id', async (req, res) => {
    try{
        const Companys =  await Company.findByIdAndUpdate(req.params.id, req.body , {new: true}).lean().exec();
        return res.status(201).send(Companys);
    }catch (e){
        return res.status(500).json({message: e.message, status : 'Failed'});
    }
})

router.delete('/:id', async (req, res) => {
    try{
        const Companys =  await Company.findByIdAndDelete(req.params.id).lean().exec();
        return res.status(201).send(Companys);
    }catch (e){
        return res.status(500).json({message: e.message, status : 'Failed'});
    }
})

module.exports = router;