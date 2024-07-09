# Start from the Nginx Alpine image
FROM nginx:alpine3.18

# Copy the index.html file from the local directory to the Nginx HTML directory
COPY index.html /usr/share/nginx/html/