
# Node Containers with load balancers. 




## Introduction

This is a simple Node application that can be deployed on  docker containers, it uses nginx for load balancing. for the orchestration leveraging docker swarm. Built for learning purpose.


## Installation

Clone this git branch on your server with docker installed.

```bash
  git clone -b DevOps-FreeCodeCamp https://github.com/VandanPatell/DockerTuts.git
  cd DockerTuts
  docker-compose -f ./docker-compose.yml -f docker-compose-dev.yml up -d --build
```

To initialize the swarm - check IP using 
```bash
ip add
```

Add IP as manager:

```bash
docker swarm init --advertise-addr 192.168.0.18
```

Deploy the stack 
```bash
docker stack deploy -c ./docker-compose.yml -c docker-compose-dev.yml mynodeapp
```
    
## Acknowledgements

 - [FreeCodeCamp](https://www.youtube.com/watch?v=9zUHg7xjIqQ)


