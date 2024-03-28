var mysql = require('mysql');



module.exports = {
    getData: function(sql, param, callback){
        var connection = mysql.createConnection({
            host: 'a31fb040e40ca40259e44f70e681e5cc-1148870372.us-east-2.elb.amazonaws.com',
            user: 'root',
            password: 'Root@123',
            database: 'pharmacy'
        });

	connection.on('error', function(err) {
	  console.log(err.code);
	});

        connection.connect(function(err){
            if(err)
            {
                console.log('error connecting database ...');
            }
        });
        if(param == null)
        {
            connection.query(sql, function(err, result){
                callback(result);
            });
        }
        else
        {
            connection.query(sql, param, function(err,result){
                callback(result);
            });
        }
    }
};



