var Chennel = {
	options : {},
	listenCallback: {},
 	addQueryListen: function(topic, callback) {
		this.listenCallback[topic] || (this.listenCallback[topic] = [])
		this.listenCallback[topic].push(callback)
	},
 	removeQueryListen: function(topic, callback) {
		if (!this.listenCallback[topic])
			return;
		var index = this.listenCallback[topic].indexOf(callback)
		if (~index) {
			this.listenCallback[topic].splice(index, 1)
		}
	},
	publish: function(topic, err , instance ) {
		if (!this.listenCallback[topic]) return;
		console.log( 'total listen count :' + this.listenCallback[topic].length );
		for (var i = this.listenCallback[topic].length - 1; i >= 0; i--) {
			this.listenCallback[topic][i]( err , instance );
			if( i == 0 ) this.listenCallback[topic] = null;
		};
	}
}

module.exports = Chennel;