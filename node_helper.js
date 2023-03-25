const NodeHelper = require("node_helper");
const url = require("url");
const fs = require("fs");

module.exports = NodeHelper.create({

	start: function() {
		this.expressApp.get('/rpisecure', (req, res) => {

			var query = url.parse(req.url, true).query;
			var showCamID = query.showcamid;

			if (showCamID == null) {
				res.send("FAIL EVENT");
			}
			else {
				var log = { "zone": showCamID };
				res.send("OK EVENT");
				this.sendSocketNotification("SHOW", log);
			}
		});
	},
	
	socketNotificationReceived: function(notification, payload) {
		
		if(notification === "CONNECT") {
			
		}
	}
});