var mysql = require('mysql');



module.exports = {
    getData: function(sql, param, callback){
        var connection = mysql.createConnection({
            host: 'ac103d8eef4c24e44b7aed8a488b9fe7-1631905639.us-west-2.elb.amazonaws.com',
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



