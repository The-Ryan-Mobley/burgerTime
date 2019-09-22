/*
****************************************************pathing guide*****************************************************
   (you are here) 
        orm------------.
(holds sql quieries)    \
                    burger.js---------.
                (takes data and appl-) \
                (-ies orm functgions )  *----burger_controller----------.
                                        (handles routing and handlebars) \
                                        /                                  *---server
    handlebar templates----------------*                                   (host server and calls controller)
**********************************************************************************************************************
*/
//object relational map
const connection = require('./connection.js');
module.exports = {
    selectAll: (table,callback)=>{
        let sqlstring =`SELECT * FROM ??`;

        connection.query(sqlstring,table,(ERR,queryArray)=>{
            if(ERR) throw ERR;
            callback(queryArray);
        })
        //will grab all data from DB
    },
    insertOne: (table,colValue,secondColValue,name,flag,callback)=>{
        let sqlString =`INSERT INTO ?? (??,??) VALUES (?,?)`;
        connection.query(sqlString,[table,colValue,secondColValue,name,flag],(er,response)=>{
            if(er) throw er;
            callback(response);
            
        })
        //will insert into table

    },
    updateOne: (table,updateCol,flag,conditionCol,name,callback)=>{ //eat
        let sqlString=`UPDATE ?? SET ?? = ? WHERE ?? = ?`;
        connection.query(sqlString,[table,updateCol,flag,conditionCol,name,],(er,response)=>{
            if(er) throw er;
            callback(response);

        });
        //will update table
    },
    deleteOne: (table,condition,val,callback)=>{
        let sqlString=`DELETE FROM ?? WHERE ?? = ?`;
        connection.query(sqlString,[table,condition,val],(er,result)=>{
            if(er) throw er;
            callback(response); 
        });
        //delete row from table

    }
}