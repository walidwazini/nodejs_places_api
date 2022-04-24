const Place = require('../models/place-model')

exports.getAllPlaces = (req, res) => {
  Place.fetchAll(places => {
    res.json(places)
  })
}

exports.postAddPlace = (req, res) => {
  let newPlace = new Place()
  newPlace.name = req.body.name
  newPlace.country = req.body.country
  newPlace.category = req.body.category
  newPlace.save((err) => {
    if (err) {
      res.send()
    } else {
      res.json({ message: `New place: ${newPlace.name} has been added` })
    }
  })
  // newPlace.save()
  console.log(req.body)
}
