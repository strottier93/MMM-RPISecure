# MMM-RPISecure
This is a module for the MagicMirror<sup>2</sup> smart mirror project.

This module displays home camera security when ESP32 detect doorbell button is press.

## Example

![]()

## Dependencies
  * An installation of [MagicMirror<sup>2</sup>](https://github.com/MichMich/MagicMirror)
  * ESP32 module (Example: ESP32-WROOM-32D)
  * Voltage converter 24VDC to 3.3VDC (Select INPUT VDC same that your transformer. North America is 24VDC)

## Installation
To install the module, use your terminal to:
 1. Navigate to your MagicMirror's modules folder. If you are using the default installation directory, use the command:
    
    `cd ~/MagicMirror/modules`
    
 2. Copy the module to your computer by executing the following command:
    
    `git clone https://github.com/strottier93/MMM-RPISecure.git`
    
 3. Configure your `~/MagicMirror/config/config.js`:

    ```js
    {
	 module: 'MMM-RPISecure',
	 position: 'top_left',
	 config: {
	          showDelay: '10000',
		  cameraData: [ { espPin: '4', name: 'Front Door', width: '300', height: '170', type: 'html5', url: 'http://ADDRESS_IP/video' },
				{ espPin: '5', name: 'Rear Door', width: '300', height: '170', type: 'video', url: 'http://ADDRESS_IP/video.mp4' } ]
	         }
    }
    ```

## Config Options
| Option                  | Details                                                                                                                                                                                                                                            |
| ----------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `showDelay`             | _Optional_ - Camera show 30 seconds if this value isn't define.<br />**Value:** Time in ms. If you set `showDelay: 10000`, your camera while show during 10 seconds.                                                                               |  
| `cameraData`            | **REQUIRED** - It's settings of each live stream camera.<br />**Options:** The available properties for the object are: `name`, `width`, `height`, `type`, `url`                                                                                   |
| `espPin`                | **REQUIRED** - Put the pin number I/O of the ESP32 module where button for display this camera is connect.                                                                                                                                                                          |
| `name`                  | _Optional_ - The name for header when camera is show.<br />**Default:** `CAMERA LIVE`                                                                                                                                                              |
| `width`                 | _Optional_ - The video width for adjust.<br />**Default:** `500px`<br />**Maximum:** `500px`                                                                                                                                                       |
| `height`                | _Optional_ - The video height for adjust.<br />**Default:** `500px`<br />**Maximum:** `500px`                                                                                                                                                      |
| `type`                  | **REQUIRED** - It's the player view.<br />**Options:**<br />- `html5`: Use this if your camera url is a page. Example: `http://192.168.0.10/video`<br />- `video`: Use this if your camera url is a file. Example: `http://192.168.0.10/video.mp4` |
| `url`                   | **REQUIRED** - Source of your camera live stream. Example: `http://192.168.0.10/video` or `http://192.168.0.10/video.mp4`                                                                                                                          |


# Setup ESP32 module

## 1\. Installing ESP32 Add-on in Arduino IDE (Skip to step 2 if they are already installed)

### 1.1\. In your Arduino IDE, go to File> Preferences

![](https://i0.wp.com/randomnerdtutorials.com/wp-content/uploads/2016/12/arduino-ide-open-preferences.png?w=196&quality=100&strip=all&ssl=1)

### 1.2\. Enter the following into the “Additional Board Manager URLs” field

`https://raw.githubusercontent.com/espressif/arduino-esp32/gh-pages/package_esp32_index.json`

![](https://i0.wp.com/randomnerdtutorials.com/wp-content/uploads/2022/04/ESP32-URL-Arduino-IDE.png?w=828&quality=100&strip=all&ssl=1)

**Note:** If you already have the ESP8266 boards URL, you can separate the URLs with a comma as follows:

`https://raw.githubusercontent.com/espressif/arduino-esp32/gh-pages/package_esp32_index.json, http://arduino.esp8266.com/stable/package_esp8266com_index.json`

### 1.3\. Open the Boards Manager. Go to Tools > Board > Boards Manager

![](https://i0.wp.com/randomnerdtutorials.com/wp-content/uploads/2018/06/boardsManager.png?w=628&quality=100&strip=all&ssl=1)

### 1.4\. Search for ESP32 and press install button for the “ESP32 by Espressif Systems“

![](https://i0.wp.com/randomnerdtutorials.com/wp-content/uploads/2018/06/installing.png?w=786&quality=100&strip=all&ssl=1)

### 1.5\. That’s it. It should be installed after a few seconds

![](https://i0.wp.com/randomnerdtutorials.com/wp-content/uploads/2019/07/ESP32-Board-add-on-in-Arduino-IDE-installed.png?w=786&quality=100&strip=all&ssl=1)

## 2\. Configure ESP32 script

### 2.1\. Open the main.cpp file in your Arduino IDE and modifiy theses lines

```c++
const char* ssid = "YOUR_NETWORK_SSID";
const char* password = "YOUR_NETWORK_PASSWORD";
String serverName = "http://YOUR_MAGICMIRROR_IP:8080/rpisecure";
```









