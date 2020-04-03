# Installation
Using Node 10 run `npm i` in `project-autumn-pi`.

Change the permissions for `run_app.sh` by running `sudo chmod 755 run_app.sh` to ensure the file is executable, then add script to your crontab by running `crontab -e` and adding the path to the file and the cron config for how often you want it to fire

# Configuration
Follow the steps outlined [here](https://learn.adafruit.com/adafruits-raspberry-pi-lesson-11-ds18b20-temperature-sensing/hardware) for wiring up the temperature sensors (DS18B20) and [here](https://learn.adafruit.com/adafruits-raspberry-pi-lesson-11-ds18b20-temperature-sensing/ds18b20) to start measuring data