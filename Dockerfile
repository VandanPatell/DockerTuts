FROM node:14

# Install git
RUN apt-get update && apt-get install -y git
WORKDIR /usr/src/app

# Remove any existing code
RUN rm -rf *

# Clone the remote Git repository
RUN git clone -b Node-JS https://github.com/VandanPatell/DockerTuts.git

# Copy package.json separately to leverage Docker cache if unchanged
COPY package*.json app.js ./

RUN npm install
EXPOSE 3000
CMD ["node","app.js"]