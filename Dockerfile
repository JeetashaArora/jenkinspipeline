# Use the official Node.js image as base
FROM node:12.2.0-alpine as nodework

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package.json .

# Install dependencies using npm ci
RUN npm install 

COPY . .

RUN npm run build
# # Expose port 3000 to the outside world
# EXPOSE 3000

# # Start the React app
# CMD ["npm", "start"]

#nginx
FROM nginx:1.23-alpine
WORKDIR /usr/share/nginx/html
RUN rm -rf ./*
COPY --from=nodework /app/build .
ENTRYPOINT ["nginx","-g","daemon off;"]

