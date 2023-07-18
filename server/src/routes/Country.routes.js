const CountryRouter = require('express').Router()

const {getCountryId, getCountryByName} = require('../handler/countryhandler')



CountryRouter.get('/', getCountryByName)

CountryRouter.get('/:id', getCountryId)

module.exports = CountryRouter