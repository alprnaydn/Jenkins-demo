# Start from a minimal Go image
FROM docker.io/library/golang

# Set the working directory inside the container
WORKDIR /go/src/app


# Copy the entire project to the working directory
COPY . .




# Build the Go application
RUN go build -o main main.go

# Expose the port that the application will run on
EXPOSE 5000
# Start the application
CMD ["./main"]