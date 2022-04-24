const fs = require('fs')
const path = require('path')

const filePath = path.join(
  path.dirname(process.mainModule.filename),
  'data', 'places.json'
)

const getProductsFromFile = callback => {
  fs.readFile(filePath, (err, fileContent) => {
    if (err) {
      return callback([])
    } else {
      callback(JSON.parse(fileContent))
    }
  })
}

module.exports = class Place {
  constructor(name, country, category) {
    this.name = name
    this.country = country
    this.category = category
  }

  save() {
    getProductsFromFile(products => {
      products.push(this)
      fs.writeFile(filePath, JSON.stringify(products), err => {
        console.log(err)
      })
    })
  }

  static fetchAll(callback) {
    getProductsFromFile(callback)
  }
}