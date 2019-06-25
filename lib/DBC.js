let mysql = require('mysql');
console.log("DateBase Controller by gt99 init");

class DBController {
    constructor(config,pool = false){
        if(pool)
            this.poll = mysql.createPool(config);
        else
            this.connection = mysql.createConnection(config);
    }

    poolQuery(query,value = null,callback){
        if(this.poll == undefined)
            return console.log("This method use pool connect!");

        return this.poll.getConnection(function (err,connection) {
            connection.query(query,value,function(err, result, fields){
                connection.release();
                return callback(err, result, fields);
            });
        });
    }


    async query(query,value = null,callback){
        if(this.connection == undefined)
            return console.log("This method does not use pool connect!");

        this.connection.connect();

        let res = this.connection.query(query,value,function(err, result, fields){
            callback(err, result, fields);
            return result;
        });

        this.connection.end();
        return res;
    }
}

module.exports = DBController;