const express = require('express');
const app = express();
const cors = require('cors');
var config = require('./')
var bodyParser = require("body-parser");
// app.use(function(req:any,response:any,next:any){
//     console.log("before");
//     next();
// });
app.use(cors())
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
require('./routing')(app);



app.listen(3000, () => console.log('App listening on port 3000!'))