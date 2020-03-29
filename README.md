Repo for autonomous space bucket and accompanying website. 

## Space bucket
Raspberry Pi controlled will be running Node.js apps complete with humidity, air temperature and soil temperature sensors, Timer controlled lights and fans, and regulated watering.

Raspberry Pi will have 3 main responsibilities:
- Reading data from the sensors (humidity, air temperature, soil temperature) and store to firebase.
- Controlling the lights on a timer. _Low priority: Allow times to be adjusted from the web app._
- Controlling water flow to the plant with a soil moisture sensor and a solonoid.

## [Web app](https://project-autumn.netlify.com/)
[![Netlify Status](https://api.netlify.com/api/v1/badges/c53ffc26-c8c6-48a8-af27-6f9aaaa0d603/deploy-status)](https://project-autumn.netlify.com)

App is hosted on Netlify and will read data from Firebase.

Website will have the following responsibilities:
- Displaying the latest sensor data from the database
- _Low priority: Graph data over time_
