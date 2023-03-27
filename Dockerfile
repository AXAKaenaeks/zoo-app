# Use an official node.js image as the base image
FROM node:16.14.2-alpine
# Set the working directory in the image
WORKDIR /app
# Copy all files to the image
COPY . .
# Install the npm dependencies
RUN npm ci
# Expose port 3000 to the host
EXPOSE 3000
# Specify the command to run when the container starts
ENTRYPOINT [ "npm", "start" ]