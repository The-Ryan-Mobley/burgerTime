/*
****************************************************pathing guide*****************************************************
        orm------------.
(holds sql quieries)    \
                    burger.js---------.(you are here)
                (takes data and appl-) \
                (-ies orm functgions )  *----burger_controller----------.
                                        (handles routing and handlebars) \
                                        /                                 *---server
    handlebar templates----------------*                                   (host server and calls controller)
**********************************************************************************************************************
*/
const orm = require('../config/orm.js');
module.exports = {
    allBurgers: (callback)=>{
        orm.selectAll('burgers',(result)=>{
            callback(result);

        });
        
    },
    addBurger: (name,callback)=>{
        orm.insertOne('burgers','burger_name','eaten',name,'false',(result)=>{
            callback(result);

        });
    },
    eatBurger: (name)=>{
        orm.updateOne(name);
    }
}
//call orm functions