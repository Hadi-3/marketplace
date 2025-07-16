const express = require('express')
const router = express.Router()
const listing = require('../models/listing')

// VIEW NEW LISTING FORM
router.get('/new', (req, res) => {
    res.render('listings/new.ejs')
})

// POST FROM DATA TO DATABASE
router.post('/' , async (req, res) => {
    await listing.create(req.body)
    console.log(req.body)
    res.send('You submitted the form')
})

module.exports = router