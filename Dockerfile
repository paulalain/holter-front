# Step 1: Set the base image
FROM node:23 AS build

# Set the working directory in the container
WORKDIR /app

# Copy the package.json and package-lock.json files to the container
COPY package*.json ./

# Install project dependencies
RUN npm install

# Copy the rest of the project files to the container
COPY . .

# Build the React app
RUN npm run build

# Expose the port that the server will listen on
EXPOSE 4173

# Start the application
CMD ["npm", "run", "serve","--","--host","0.0.0.0"]