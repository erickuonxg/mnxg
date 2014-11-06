var mongoose = require( 'mongoose' );
var mnxg = require( './mnxg/mnxg.js' )( 'mongodb://localhost/longPolling' , {
	connected : function(){
		mongoose.model( 'Car' , new mongoose.Schema( {
			name : 'string'
		} ) );
	}
});

exports.index = function(req, res){
  res.render('index', { title: 'Express' })
};

exports.longpulling = function(req, res){
	console.log( req.query['_id'] )
	mnxg.channel.addQueryListen( req.query['_id'] , (function(){
		var _res = res;
		return function( err , car ){
			if( car ) return _res.send( car );
		}
	})() );
};

//change value
exports.setvalue = function(req, res){
	mongoose.model( 'Car' ).findOneAndUpdate( req.body['_id'] , {name : req.body['name']} , function( err , car ){
		if( car ){
			mnxg.channel.publish( req.body['_id'] , err , car );
			return res.send( car );
		}
	});
};

// init data
exports.initData = function( req , res ){
	mongoose.model( 'Car' ).findOne( {} , function( err , car ){
		if( car ) res.send( car );
	})
}