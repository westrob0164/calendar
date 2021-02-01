
import { calandarCreator  } from './interfaceJs/calandarCreator.js';
//import { inportData  } from './interfaceJs/getData.js';


// set up getWeek function
Date.prototype.getWeek = function () {
    var onejan = new Date(this.getFullYear(), 0, 1);
    return Math.ceil((((this - onejan) / 86400000) + onejan.getDay() + 1) / 7);
};

let today = new Date();
let currentMonth =  today.getMonth();   
let currentYear =  today.getFullYear();

// const express = require("express");
// const debug = require("debug")("server");

// const app = express();
// const port = process.env.SERVER_PORT || 3001;


// app.use(function(req, res, next) {
//     res.header("Access-Control-Allow-Origin", "*");
//     res.header(
//       "Access-Control-Allow-Headers",
//       "Origin, X-Requested-With, Content-Type, Accept"
//     );
//     next();
//   });

//fetch("http://127.0.0.1:5501/").then(a => a.text()).then(console.log)


calandarCreator(currentMonth, currentYear);



