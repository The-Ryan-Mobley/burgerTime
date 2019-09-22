/*
****************************************************pathing guide*****************************************************
        orm------------.
(holds sql quieries)    \ (you are here)
                    burger.js---------.
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
        orm.insertOne('burgers','burger_name','eaten',name,false,(result)=>{
            callback(result);

        });
    },
    eatBurger: (name,callback)=>{
        orm.updateOne('burgers','eaten',true,'burger_name',name,(result)=>{
            callback(result);
        });
    }
}
//call orm functions