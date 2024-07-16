# Start from the Nginx Alpine image
FROM nginx:stable

# Copy the index.html file from the local directory to the Nginx HTML directory
COPY index.html /usr/share/nginx/html/
COPY css/ /usr/share/nginx/html/
COPY js/ /usr/share/nginx/html/

