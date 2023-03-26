# MMM-RPISecure
This is a module for the MagicMirror<sup>2</sup> smart mirror project.

This module displays home camera security when an event is detected by ESP32 script.

## Example

![]()

## Dependencies
  * An installation of [MagicMirror<sup>2</sup>](https://github.com/MichMich/MagicMirror)

## Installation
To install the module, use your terminal to:
 1. Navigate to your MagicMirror's modules folder. If you are using the default installation directory, use the command:
    
    `cd ~/MagicMirror/modules`
    
 2. Copy the module to your computer by executing the following command:
    
    `git clone https://github.com/strottier93/MMM-RPISecure.git`
    
 3. Configure your `~/MagicMirror/config/config.js`:

    ```js
    {
	 module: 'MMM-RPIsecure',
	 position: 'top_left',
	 config: {
	          showDelay: '10000',
		  cameraData: [ { name: 'Front Door', width: '300', height: '170', type: 'html5', url: 'http://ADDRESS_IP/video' },
				{ name: 'Rear Door', width: '300', height: '170', type: 'video', url: 'http://ADDRESS_IP/video.mp4' } ]
	         }
    }
    ```

## Config Options
| Option                  | Details                                                                                                                                                                                                                                            |
| ----------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `showDelay`             | _Optional_ - Camera show 30 seconds if this value isn't define.<br />**Value:** Time in ms. If you set `showDelay: 10000`, your camera while show during 10 seconds.                                                                               |  
| `cameraData`            | **REQUIRED** - It's settings of each live stream camera.<br />**Options:** The available properties for the object are: `name`, `width`, `height`, `type`, `url`                                                                                   |
| `name`                  | _Optional_ - The name for header when camera is show.<br />**Default:** `CAMERA LIVE`                                                                                                                                                              |
| `width`                 | _Optional_ - The video width for adjust.<br />**Default:** `500px`<br />**Maximum:** `500px`                                                                                                                                                       |
| `height`                | _Optional_ - The video height for adjust.<br />**Default:** `500px`<br />**Maximum:** `500px`                                                                                                                                                      |
| `type`                  | **REQUIRED** - It's the player view.<br />**Options:**<br />- `html5`: Use this if your camera url is a page. Exemple: `http://192.168.0.10/video`<br />- `video`: Use this if your camera url is a file. Exemple: `http://192.168.0.10/video.mp4` |
| `url`                   | **REQUIRED** - Source of your camera live stream. Exemple: `http://192.168.0.10/video` or `http://192.168.0.10/video.mp4`                                                                                                                          |


## How to Use
