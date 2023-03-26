# MMM-RPISecure
Notification API Module for MagicMirror<sup>2</sup>

## Example

![](https://forum.magicmirror.builders/uploads/files/1473753516823-syslog-icon-4.jpg)

## Dependencies
  * An installation of [MagicMirror<sup>2</sup>](https://github.com/MichMich/MagicMirror)

## Installation
 1. Clone this repo into `~/MagicMirror/modules` directory.
 2. Configure your `~/MagicMirror/config/config.js`:

    ```
    {
	 module: 'MMM-RPIsecure',
	 position: 'top_left',
	 config: {
	          showDelay: '10000',
			  cameraData: [
				           { name: 'Camera Porte', width: '300', height: '300', type: 'html5', url: 'https://www.youtube.com/embed/tYf0BoFe9D8' },
						   { name: 'Camera Avant', width: '300', height: '170', type: 'video', url: 'http://kstomwire.ca/video.mp4' }
						  ]
			 }
	}
    ```

## Config Options
| **Option** | **Default** | **Description** |
| --- | --- | --- |
| `showDelay` | `30000` | *optional* Camera show 30 seconds if this value isn't define.  |
| `format` | `false` | Displays relative date format, for absolute date format provide a string like `'DD:MM HH:mm'` [All Options](http://momentjs.com/docs/#/displaying/format/) |
| `types` | `{INFO: "dimmed", WARNING: "normal", ERROR: "bright"}` | Object with message types and their css class. |
| `shortenMessage` | `false` | After how many characters the message should be cut. Default: show all. |
| `alert` | `true` | Display notification? |

## How to Use
Make an http get request like:
  http://MIRROR_IP:MIRROR_PORT/syslog?type=INFO&message=YOUR_MESSAGE&silent=true : no notification