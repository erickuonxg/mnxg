angular.module( 'myApp' )
	.factory( 'DataAPI' , [ '$http' ,function($http){
		// ,timeout:10000
		return {
			
			post : function( url , parms , success , error ){
					$http( { method:'POST' , url:url , data:parms  } )
					.success( success )
					.error( error )
				},
			get : function( url , parms , success , error ){
					$http( { method:'GET' , url:url , params:parms  } )
					.success( success )
					.error( error )
				}
			
		}
		
	}] )