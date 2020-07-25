# Message Broker Sample Project

This is an example project I created using RabbitMQ and Node.js

## How to start the project

Go to the project directory

```
  yarn install
  # use -d to run docker on detached mode
  docker-compose --file docker/docker-compose.yaml up
  yarn start
```

Now you can acccess on your browser htttp://localhost:3000/send and check your terminal to see the message
