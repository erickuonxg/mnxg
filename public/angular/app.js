angular.module( 'myApp' , [])
	.controller( 'ButtonController' , ['$scope' , 'DataAPI' , function($scope , DataAPI){
		
		$scope.cars = {};
		$scope.name = '';
		DataAPI.get( '/initData' , {} , function( success ){
			$scope.cars = success;
		} , function( error ){	} );
		
		$scope.longPulling = function(){
			console.log( 'long pulling ..' )
			DataAPI.get( '/longpulling' , { _id:$scope.cars._id } , function( data ){
				$scope.longPulling();
				$scope.cars = data;
			} , function( error ){
				$scope.longPulling();
				console.log( 'error!' );
			})
		}
				
		$scope.change = function(){
			console.log( 'change value ..' )
			DataAPI.post( '/setvalue' , { _id:$scope.cars._id , name:$scope.name } , function( data ){
				$scope.cars = data;
			} , function( error ){
				console.log( 'error' );
			})
		}
		
		
	}] )