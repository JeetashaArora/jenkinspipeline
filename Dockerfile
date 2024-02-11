# Use the official Node.js image as base
FROM node:14

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install dependencies using npm ci
RUN npm ci

# Copy the src and public folders to the working directory
COPY src/ ./src
COPY public/ ./public

# Expose port 3000 to the outside world
EXPOSE 3000

# Start the React app
CMD ["npm", "start"]
