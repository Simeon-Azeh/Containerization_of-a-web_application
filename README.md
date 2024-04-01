
---

# Management App

## Description

This project is a simple web application for managing personal projects and tasks. It allows users to create, manage, and track their tasks efficiently. The application is designed to be lightweight, user-friendly, and scalable.

## Features

- Add new tasks
- View list of tasks
- Mark tasks as completed


## Technologies Used

- HTML
- CSS
- JavaScript
- Docker

## Getting Started

To run the application locally, follow these steps:

1. Clone this repository to your local machine.
2. Navigate to the project directory.
3. Build the Docker image using the provided Dockerfile:
   ```
   docker build -t my-node-app .
   ```
4. Run the Docker container:
   ```
   docker run -p 8080:80 my-node-app
   ```
5. Open your web browser and navigate to `http://localhost:8080` to access the application.

## Docker Hub

The Docker image for this application is hosted on Docker Hub. You can pull the image from the following repository:

docker pull kayc111/my-node-app

https://hub.docker.com/r/kayc111/my-node-app
