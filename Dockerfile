FROM node:22

WORKDIR /app

# Install MongoDB and required packages
RUN apt-get update && apt-get install -y \
    wget \
    gnupg2 \
    software-properties-common \
    && wget -qO - https://pgp.mongodb.com/server-8.0.asc | gpg --dearmor > /usr/share/keyrings/mongodb-server-8.0.gpg \
    && echo "deb [ arch=amd64,arm64 signed-by=/usr/share/keyrings/mongodb-server-8.0.gpg ] https://repo.mongodb.org/apt/ubuntu jammy/mongodb-org/8.0 multiverse" | tee /etc/apt/sources.list.d/mongodb-org-8.0.list \
    && apt-get update \
    && apt-get install -y mongodb-org \
    && rm -rf /var/lib/apt/lists/*

# Install global dependencies
RUN npm install -g @angular/cli@20.2.1 nodemon@3.1.10 concurrently@9.1.0

# Create MongoDB data directory
RUN mkdir -p /data/db

# Copy root package.json first
COPY package.json ./

# Copy client package.json
COPY client/package.json ./client/

# Install dependencies
RUN npm install
RUN cd client && npm install

# Copy source code
COPY . .

# Expose port
EXPOSE 3000

# Start script that runs MongoDB, builds Angular, builds TypeScript, and starts Express - TRUE MONOLITH
CMD ["sh", "-c", "mongod --fork --logpath /var/log/mongodb.log && npm run client:build && npm run build && npm start"]
