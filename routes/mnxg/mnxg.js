var Connection = require( './libs/connection.js' )

module.exports = function( uri , options ){
	return new Connection( uri , options );
}
