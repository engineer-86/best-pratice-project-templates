# TypeScript Starter Project

## Project Setup

This is a TypeScript-based Node.js project. Follow the instructions below to set up and run the project using Docker or Node.js.

### Prerequisites

- **Docker** must be installed on your machine.
- **Node.js** installed locally if you want to run the project without Docker. You can install Node.js using a package manager of your choice from the official website: [Node.js Installation Guide](https://nodejs.org/en/download/package-manager).

## Environment Variables

Before running the project, make sure to set up the required environment variables. You can do this by renaming the `.env.template` file to `.env` and filling in the necessary details.

### Steps:

1. Copy `.env.template` to `.env`:

   ```bash
   cp .env.template .env
   ```
2. Open the `.env` file and fill in the environment variables:

   ```env
   PORT="3000"
   DB_CONN_STRING="your_database_connection_string"
   DB_NAME="your_database_name"
   USER_COLLECTION="your_user_collection"
   QUEST_COLLECTION="your_quest_collection"
   ```

## Build and Run with Docker

To build and run the project in a Docker container, follow these steps:

### 1. Build the Docker image

   Run the following command to build the Docker image:

```bash
   docker build -t my-ts-app .
```

### 2. Run the Docker container

   Once the image is built, you can run the container using this command:

```bash
   docker run -p 3000:3000 my-ts-app
```

This command will map the container's port 3000 to the host's port 3000, making the app accessible at `http://localhost:3000/status`.

### 3. Access the App

Once the container is running, open your browser or use a tool like `curl` to test the server:

```bash
   curl http://localhost:3000/status
```

If everything is set up correctly, you should see a response indicating that the server is online.

---

## Docker Compose

To run the project using Docker Compose, follow these steps:

### 1. Build the Docker image

Go to the root of the project and run:

```bash
docker-compose up --build
```

If you made any changes to the code, you need to run the command again to rebuild the image.

## Running Locally (Optional)

If you want to run the project locally without Docker, make sure Node.js is installed and follow these steps:

### 1. Install Node.js

Install Node.js on your machine by following the instructions for your operating system: [Node.js Installation Guide](https://nodejs.org/en/download/package-manager).

### 2. Install dependencies:

   After cloning the repository, navigate to the project directory and run:

```bash
   npm install
```

### 3. Available npm commands:

- **Build the project**:

  ```bash
  npm run build
  ```
- **Run the development server** (with live reload using `nodemon`):

  ```bash
  npm run start:dev
  ```
- **Run the production server**:

  ```bash
  npm run start
  ```
- **Run ESLint to lint the project**:

  ```bash
  npm run lint
  ```

### 4. Run the project:

   Once the dependencies are installed, start the server by running:

```bash
   npm start
```

3. Access the app at `http://localhost:3000/status`.

---

## Troubleshooting

If you encounter issues:

- Make sure the `.env` file is properly configured.
- Ensure that the required ports are open and not blocked by a firewall.
- Check the Docker logs using `docker logs <container_id>` for any errors.
