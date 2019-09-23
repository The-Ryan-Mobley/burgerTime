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
            // let returnArr = [];
            // result.forEach(i=>{
            //     if(i.eaten === 0){
            //         i.eaten = false;
            //     }
            //     else{
            //         i.eaten = true;
            //     }
            //     returnArr.push(i);
            // });
            callback(result);

        });
        
    },
    addBurger: (name,callback)=>{
        orm.insertOne('burgers','burger_name','eaten',name,false,(result)=>{
            callback(result);

        });
    },
    eatBurger: (id,callback)=>{
        orm.updateOne('burgers','eaten',true,'id',id,(result)=>{
            callback(result);
        });
    },
    deleteBurger: (id,callback)=>{
        orm.deleteOne('burgers','id',id,(result)=>{
            callback(result);
        })
    }

}
//call orm functions