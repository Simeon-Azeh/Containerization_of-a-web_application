# Use an official web server image as the base image
FROM nginx:alpine

# Set the working directory in the container
WORKDIR /usr/share/nginx/html

# Copy the HTML, CSS, and JavaScript files into the container
COPY index.html .
COPY styles.css .
COPY script.js .

# Expose port 80 to allow external access
EXPOSE 80

# Command to start the web server
CMD ["nginx", "-g", "daemon off;"]