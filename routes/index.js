const routes = require('express').Router();
const contactController = require('../controllers/contacts');
const myController = require('../controllers');

routes.get('/', myController.awesomeFunction);

routes.get('/awesome', myController.returnAnFunction);
routes.get('/getAll', contactController.getAllContact);
routes.get('/getSingleName', contactController.getSingle);

module.exports = routes;