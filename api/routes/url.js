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
    let { link } = req.body;
    let newLink = link.replace(/^(?:https?:\/\/)?(?:www\.)?/i, '')
    let shortUrl = {...req.body, link: newLink };

    const newUrl = new Url(shortUrl);
    const test = await Url.findOne({ link: newLink });
    if(!test){
        await newUrl.save();
        res.status(201)
        res.json(newUrl)
    }
    res.status(208)
    res.json(["existe"])
});



module.exports = router;