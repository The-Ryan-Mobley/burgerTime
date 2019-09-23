/*
****************************************************pathing guide*****************************************************
        orm------------.
(holds sql quieries)    \
                    burger.js---------.
                (takes data and appl-) \       (you are here)
                (-ies orm functgions )  *----burger_controller----------.
                                        (handles routing and handlebars) \
                                        /                                 *---server
    handlebar templates----------------*                                   (host server and calls controller)
**********************************************************************************************************************
*/
const express = require('express');
const burger = require('../models/burger.js');
const path = require('path');

const app = express();

module.exports = (app)=>{
/***** */
    app.get('/',(request,responsePage)=>{ //going to do a select query likely 2 arrays one for devoured burgers and non
        burger.allBurgers((burgerResponse)=>{
            console.log(burgerResponse);
            responsePage.render('index',{burger: burgerResponse}); 
        });
            //initializes page
        //reloadpage


    });
    app.get('/burger',(request,responsePage)=>{ //possibly need for repeat select queries
        burger.allBurgers((burgerResponse)=>{
            console.log(burgerResponse);
            responsePage.render('index',{burger: burgerResponse}); 
        });
           


    });
    app.post('/burger/:name',(QueryRequest,response)=>{ //adds burger then updates page
        let burgerName =  QueryRequest.params.name.toLower();
        burger.insertOne(burgerName,(result)=>{

        });

    });
    app.put('/burger/',(queryRequest,responsePage)=>{ //updates eaten status then redisplays probably just an api
        let burgerId = queryRequest.body.burgId;
        burger.eatBurger(burgerId,(result)=>{
            if (result.changedRows == 0) {
                // If no rows were changed, then the ID must not exist, so 404
                return responsePage.status(404).end();
              } else {
                responsePage.status(200).end();
              }

        });

    });
    app.delete('/burger/delete/:id',(request,response)=>{
        let delId = request.params.id;
        burger.deleteBurger(delId,(result)=>{

        });
    })
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
/***********************************************js routes**************************************************************/
    app.get('/burger_logic.js',(request,resultPath)=>{
        resultPath.sendFile(path.join(__dirname,'../public/assets/javascript/burger_logic.js'));

    });

};