/*
****************************************************pathing guide*****************************************************
        orm------------.
(holds sql quieries)    \
                    burger.js---------.
                (takes data and appl-) \
                (-ies orm functgions )  *----burger_controller----------.(you are here)
                                        (handles routing and handlebars) \
                                                                          *---server
                                                                          (host server and calls controller)
**********************************************************************************************************************
*/
const express = require('express');
const burger = require('../models/burger.js');
const path = require('path');

const app = express();

module.exports = (app)=>{
/***** */
    app.get('/',(request,responsePage)=>{ //going to do a select query likely 2 arrays one for devoured burgers and non
        responsePage.render('index');     //initializes page


    });
    app.get('/add/:name',(QueryRequest,response)=>{ //adds burger then updates page

    });
    app.get('/eat/:name',(queryRequest,responsePage)=>{ //updates eaten status then redisplays probably just an api

    });
/***********************************************css routes**************************************************************/
    app.get("/style.css", (req, res)=> {
        res.sendFile(path.join(__dirname, "../public/assets/css/burger_style.css"));
    });
    app.get('/normalize.css',(request,resultPath)=>{
        resultPath.sendFile(path.join(__dirname,'../public/assets/css/normalize.css'));
    });
    app.get('/skeleton.css',(request,resultPath)=>{
        resultPath.sendFile(path.join(__dirname,'../public/assets/css/skeleton.css'));
    });
    app.get('/burger_logic.js',(request,resultPath)=>{
        resultPath.sendFile(path.join(__dirname,'../public/assets/javascript/burger_logic.js'));

    });

};