# Node Express Mongo NGINX Example With Docker

This is a sample application demonstrating the docker project.

Follow below stesp to host this application. 

1. Clone the git respository.
```bash
git clone https://github.com/VandanPatell/DockerTuts.git --branch Node-JS
```

2. Set the env vars if deploying production build.
```bash
export MONGO_USER="admin"
export MONGO_PASSWORD="admin"
```

3. Navigate into project directory & generate the build.
```bash 
cd DockerTuts/
```

4. For Development Build run below commands: 
```bash
docker-compose -f ./docker-compose.yml -f docker-compose-dev.yml up -d --build
```

4. for production build run below commands:
```bash
docker-compose -f ./docker-compose.yml -f docker-compose-prod.yml build --no-cache
```

5. initialize the swarm manager & deploy stack.
```bash
docker swarm init --advertise-addr 172.18.0.32
docker stack deploy -c ./docker-compose.yml -c docker-compose-dev.yml mynodeapp
```
