const express = require('express')
const router = express.Router()
const listing = require('../models/listing')

// VIEW NEW LISTING FORM
router.get('/new', (req, res) => {
    res.render('listings/new.ejs')
})

// POST FROM DATA TO DATABASE
router.post('/' , async (req, res) => {
    try {
        await listing.create(req.body)
        res.redirect('/listings')

    } catch (error) {
        console.log(error)
        res.send('Somthing went wrong')
    }
})

// VIEW THE INDEX PAGE
router.get('/', async (req, res) => {
    const foundListings = await listing.find()
    console.log(foundListings)
    res.render('listings/index.ejs', {foundListings: foundListings})
})

module.exports = router