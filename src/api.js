const express = require('express');
const serverless = require('serverless-http');
const app = express();
const cors = require('cors');
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());
app.options('*', cors());



// Import routes 
require('./Routes/index.rout').allRouts(app);

//routes
//const router = express.Router();
// router.get('/',(req,res)=>{
//     res.json({"message":"sndnsndjknskdnsddcv"});
// });
//app.use('/.netlify/functions/api',router)

// this is it!
module.exports.handler = serverless(app);