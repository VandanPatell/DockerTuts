FROM node:14

# Install git
RUN apt-get update && apt-get install -y git
WORKDIR /usr/src/app

# Remove any existing code
RUN rm -rf *

# Clone the remote Git repository
RUN git clone <repository_url> .

# Copy package.json separately to leverage Docker cache if unchanged
COPY package*.json ./

RUN npm install
EXPOSE 3000
CMD ["node","app.js"]