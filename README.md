# Simple Register

This project is a simple registry app that I have built to study docker-compose. 

The structure of the project is quite simple, allowing to create, update and delete a register of some name.

## Running the app

To run the project you just need to clone this repo and run <docker-compose up> in your CLI.
  
The docker compose will run 3 containers:
  - nginx
  - node
  - mongo
  
After that you can acess your localhost:80 and interact with the app, creating, updating and deleting a name in the database.
