Module.register('MMM-RPIsecure', {
	
	// Default configurations
	enableEvent: false,
	showCamID: false,
	internalTimer: 0,
	defaults: {
		showDelay: 30000,
		cameraData: []
	},
	
	// Style CSS
	getStyles: function() {
		return ["MMM-RPIsecure.css", "font-awesome.css"];
	},
	
	// Core javascript
	getScripts: function() {
		return ["moment.js"];
	},
	
	// Init Start
	start: function() {
		
		this.sendSocketNotification();
		
		Log.info("Starting module: " + this.name);
		moment.locale(config.language);
		
		// Reset after delay
		setInterval(() => {
			
			if (this.internalTimer > 0) {
				this.internalTimer = this.internalTimer-1000;
			} else {
				this.showCamID = false;
				this.enableEvent = false;
				this.updateDom(1000);
			}
			
		}, 1000);
	},
	
	// Receive from HTTP Request
	socketNotificationReceived: function(notification, payload) {
		
		if (notification == "SHOW") {
			this.showCamID = payload.zone;
			this.enableEvent = true;
			this.internalTimer = this.config.showDelay;
			this.updateDom(1000);
		}
	},
	
	// Show module
	getDom: function() {
		
		if (this.enableEvent == true) {
			
			// Camera data select
			cameraSetting = this.config.cameraData[this.showCamID];
			
			// Create DIV container
			var wrapper = document.createElement("div");
			
			// Create HEADER container
			var title = document.createElement("header");
			title.innerHTML = cameraSetting.name || "NO NAME DEFINE";
			wrapper.appendChild(title);
			
			// Create IFRAME container
			if (cameraSetting.type == "html5") {
				var video = document.createElement("iframe");
				video.className = "iframe";
			}
			
			// Create VIDEO container
			if (cameraSetting.type == "video") {
				var video = document.createElement("video");
				video.autoplay = true;
				video.controls = false;
				video.muted = true;
			}
			
			// Common video settings
			video.width = (cameraSetting.width < 500) ? cameraSetting.width : 500;
			video.height = (cameraSetting.height < 500) ? cameraSetting.height : 500;
			video.src = cameraSetting.url;
			wrapper.appendChild(video);
			
		} else {
			var wrapper = document.createElement("div");
		}
		
		return wrapper;
	}
});
