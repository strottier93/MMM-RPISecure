Module.register('MMM-RPIsecure', {
	
	// Default configurations
	showEvent: false,
	showCamID: false,
	defaults: {
		maxWidth: 450,
		maxHeight: 450,
		showDelay: 30000,
		cameraData: []
	},
	
	// Style CSS
	getStyles: function() {
		return ["font-awesome.css"];
	},
	
	// Core javascript
	getScripts: function() {
		return ["moment.js"];
	},
	
	// Init Start
	start: function() {
		
		this.sendSocketNotification("CONNECT", "");
		Log.info("Starting module: " + this.name);
		moment.locale(config.language);
		
		// Reset after delay
		setInterval(() => {
			this.showEvent=false;
			this.showCamID=false;
			this.updateDom();
		}, this.config.showDelay);
	},
	
	// Receive from HTTP Request
	socketNotificationReceived: function(notification, payload) {
		
		if (notification === "SHOW") {
			this.showCamID=payload.zone;
			this.showEvent=true;
			this.updateDom(1000);
		}
	},
	
	// Show module
	getDom: function() {
		
		if (this.showEvent == true) {
			
			// Create DIV container
			var wrapper = document.createElement("div");
			
			// Create HEADER container
			var title = document.createElement("header");
			title.innerHTML = this.config.cameraData[this.showCamID].name || "NO NAME DEFINE";
			wrapper.appendChild(title);
			
			// Create IFRAME container
			var iframe = document.createElement("IFRAME");
			iframe.style = "border: 0 none transparent";
			iframe.width = this.config.maxWidth;
			iframe.height = this.config.maxHeight;
			iframe.src = this.config.cameraData[this.showCamID].url;
			wrapper.appendChild(iframe);
		} else {
			var wrapper = document.createElement("div");
		}
		
		return wrapper;
	}
});