const  membersController = require('./controllers/membersController');

module.exports = function(app:any){
    
    app.get('/members',membersController.get);
    app.post('/members',membersController.post);
    
};
