# 5. Orchestration
## Table of contents
* [General info](#general-info)
* [Technologies](#technologies)
* [Setup](#setup)

## General info
This project is a simple exercise for creating docker-compose between 2 services

## Technologies
Project is created with:
* Node.js
* Docker

## Setup
To see the user interface through browser https://timetable-app-hls.herokuapp.com/

To run this project:

```
Go to the exercise repository
$ cd ../docker-compose
Run docker-compose up
$ docker-compose up --build
Open the terminal and run
$ curl http://localhost:8001/
After that it will print the message 
Hello from 192.168.0.1:61472 to 192.168.0.3:8001
Hello from 192.168.0.3:49576 to 192.168.0.2:8002

##Example:
risa@Risas-MBP ~ % curl http://localhost:8001/
Hello from 192.168.0.1:61472 to 192.168.0.3:8001
Hello from 192.168.0.3:49576 to 192.168.0.2:8002

 
