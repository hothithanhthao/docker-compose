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
To run this project:

```
Go to the exercise repository
$ cd ../docker-compose
Run docker-compose up
$ docker-compose up --build
Open the terminal and run
$ curl http://localhost:8001/
After that it will print the message 
Hello from 192.168.48.1:61500 to 192.168.48.3:8001
Hello from 192.168.48.3:53184 to 192.168.48.2:8002
Shut down docker compose
$ docker-compose down
or this will help to remove images and containers
$ docker-compose down --rmi all

##Example:
risa@Risas-MBP ~ % curl http://localhost:8001/
Hello from 192.168.48.1:61500 to 192.168.48.3:8001
Hello from 192.168.48.3:53184 to 192.168.48.2:8002

 
