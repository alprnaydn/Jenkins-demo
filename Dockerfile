# Start from the Nginx Alpine image
FROM nginx:stable

# Copy the index.html file from the local directory to the Nginx HTML directory
COPY index.html /usr/share/nginx/html/
COPY style.css /usr/share/nginx/html/
COPY app.js /usr/share/nginx/html/

