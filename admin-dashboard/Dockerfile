# Use an official Node.js runtime as the base image
FROM node:14

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json to the container
COPY package*.json ./

# Install app dependencies
RUN npm install

# Copy the rest of the app code to the container
COPY . .

# Build the React app
RUN npm run build

# Expose the port your app will run on
EXPOSE 80

# Start the app
CMD ["npm", "start"]
