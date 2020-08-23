
# Autumn Pi
This section of the codebase is for the server-side code that will run on the Raspberry Pi.
Currently the app boots a GraphQL API that returns the readings of the sensors attached to the Pi.

## Installation
Using Node v10 or above run `npm i` in `project-autumn-pi`.

## Configuration
Follow the steps outlined [here](https://learn.adafruit.com/adafruits-raspberry-pi-lesson-11-ds18b20-temperature-sensing/hardware) for wiring up the temperature sensors (DS18B20) and [here](https://learn.adafruit.com/adafruits-raspberry-pi-lesson-11-ds18b20-temperature-sensing/ds18b20) to start measuring data

## Running
Run the app with `npm run start` from the root. This will transpile the source code from TypeScript to ES6 JavaScript and start the GraphQL server on port 4000