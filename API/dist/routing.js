"use strict";
const membersController = require('./controllers/membersController');
module.exports = function (app) {
    app.get('/members', membersController.get);
    app.post('/members', membersController.post);
};
