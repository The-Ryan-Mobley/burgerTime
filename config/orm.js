const connection = require('./connection.js');
module.exports = {
    selectAll: ()=>{
        connection.query(`SELECT * FROM BURGERS`,(ERR,queryArray)=>{
            if(ERR) throw ERR;
        })
        //will grab all data from DB
    },
    insertOne: ()=>{
        //will inser tinto table

    },
    updateOne: ()=>{
        //will update table
    }
}