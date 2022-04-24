const path = require('path')
const express = require('express')

const placeController = require('../controllers/places')

const router = express.Router()

router.get('/allplaces', placeController.getAllPlaces)

router.post('/addplace', placeController.postAddPlace)


exports.routes = router