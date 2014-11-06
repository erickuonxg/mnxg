var mongoose = require( 'mongoose' ),
	channel = require( './channel.js' );

var Connection = function( url , options ){
	channel.options = options;
	mongoose.connection.once( 'open' , function(){
		console.log( 'Mnxg start now & Mongodb also connected...' );
		if( options.connected ) options.connected();
	});
	mongoose.connect( url );
}
Connection.prototype.channel = channel;
module.exports = Connection;