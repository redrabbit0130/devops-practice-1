# Fix Submission 1

This is a simple Node.js app for DevOps practice.

The app runs a small web server on port `3000`.

It has:

* A home page
* A health check endpoint
* Docker support
* Docker Compose support

## Project Files

```text
fix-submission-1/
  server.js
  package.json
  Dockerfile
  docker-compose.yml
  README.md
```

## Requirements

To run this project locally, you need:

* Node.js
* npm
* Docker
* Docker Compose

## Run Locally Without Docker

Install dependencies:

```bash
npm install
```

Start the app:

```bash
npm start
```

Open in browser:

```text
http://localhost:3000
```

Test with curl:

```bash
curl http://localhost:3000
```

Test the health endpoint:

```bash
curl http://localhost:3000/health
```

Expected health response:

```json
{
  "status": "ok",
  "app": "simple-devops-app"
}
```

## Run Test

This project uses a simple syntax check test.

```bash
npm test
```

## Build Docker Image

Build the Docker image:

```bash
docker build -t fix-submission-1:1.0 .
```

## Run Docker Container

Run the container:

```bash
docker run -p 3000:3000 fix-submission-1:1.0
```

Open in browser:

```text
http://localhost:3000
```

## Run Docker Container in Background

```bash
docker run -d -p 3000:3000 --name fix-submission-1-app fix-submission-1:1.0
```

Check running containers:

```bash
docker ps
```

Check logs:

```bash
docker logs fix-submission-1-app
```

Stop the container:

```bash
docker stop fix-submission-1-app
```

Remove the container:

```bash
docker rm fix-submission-1-app
```

## Run With Environment Variable

```bash
docker run -p 3000:3000 -e APP_MESSAGE="Hello from Docker" fix-submission-1:1.0
```

## Run With Docker Compose

Start the app:

```bash
docker compose up
```

Start in background:

```bash
docker compose up -d
```

Check logs:

```bash
docker compose logs
```

Stop and remove:

```bash
docker compose down
```

## Useful Docker Commands

```bash
docker images
docker ps
docker ps -a
docker logs CONTAINER_NAME
docker stop CONTAINER_NAME
docker rm CONTAINER_NAME
```

## What I Learned

From this project, I learned:

* How to create a simple Node.js app
* How to use `package.json`
* How to run an app with npm
* How to create a Dockerfile
* How to build a Docker image
* How to run a Docker container
* How to use environment variables
* How to use Docker Compose
* How to check container logs
