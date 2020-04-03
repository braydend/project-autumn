# Installation
Using Node 10 run `npm i` in `project-autumn-pi`.

# Configuration
Follow the steps outlined [here](https://learn.adafruit.com/adafruits-raspberry-pi-lesson-11-ds18b20-temperature-sensing/hardware) for wiring up the temperature sensors (DS18B20) and [here](https://learn.adafruit.com/adafruits-raspberry-pi-lesson-11-ds18b20-temperature-sensing/ds18b20) to start measuring data

# Running
Run `run_app.sh` (If this doesnt work, ensure it has the correct permissions `sudo chmod 755 run_app.sh`). The app will send data every hour to firestore. 