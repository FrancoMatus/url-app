const express = require('express');
const router = express.Router();
const Url = require('../models/Url');

router.get('/domain', async (req, res) => { 
    const allUrl = await Url.find();
    res.json(allUrl)
})

router.get('/:_id', async (req, res) => {
    const idUrl = req.params._id;
    const urlShorten = await Url.findOne({_id: idUrl})
    res.json(urlShorten)
})

router.post('/shorten', async (req, res) => {
    const newUrl = new Url(req.body);
    await newUrl.save();
    res.json(newUrl)
});



module.exports = router;