const connection = require('./connection.js');
module.exports = {
    selectAll: ()=>{
        connection.query(`SELECT * FROM burgers`,(ERR,queryArray)=>{
            if(ERR) throw ERR;
        })
        //will grab all data from DB
    },
    insertOne: (name)=>{
        connection.query(`INSERT INTO burgers (burger_name,eaten) VALUES (?,?)`,[name,false],(er,response)=>{
            if(er) throw er;
            
        })
        //will inser tinto table

    },
    updateOne: (name)=>{
        connection.query(`UPDATE burgers SET eaten=? WHERE burger_name=?`,[name,true],(er,response)=>{
            if(er) throw er;

        });
        //will update table
    }
}