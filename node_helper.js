const NodeHelper = require("node_helper");
const url = require("url");

module.exports = NodeHelper.create({

	start: function() {
		
		// Create page HTTP
		this.expressApp.get('/rpisecure', (req, res) => {
			
			// Select url
			var query = url.parse(req.url, true).query;
			
			// Get variable of url
			var showCamID = query.showcamid;
			
			// If variable showCamID is empty
			if (showCamID == null || showCamID == "") {
				res.send("FAIL EVENT");
			}
			else {
				var log = { "zone": showCamID };
				res.send("OK EVENT");
				this.sendSocketNotification("SHOW", log);
			}
		});
	}
});
