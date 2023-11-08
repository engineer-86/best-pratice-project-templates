#### By Konrad Münch

# Modern JS Project

This is a state-of-the-art CRUD backend built with the latest JavaScript standards using Node.js, Express, and
additional middleware for authentication and database interaction.

## Installation

To get started with this project, clone the repository to your local machine and install the dependencies.

```bash
git clone https://your-repository-link.git
cd modern-js-project
npm install
```

## Setup

Create a `.env` file from the `.env.template` and fill in your specific details such as database connection and JWT
secret.

## Project Structure

The project is structured as follows:

- `src/`: The source directory for all application code.
    - `config/`: Contains configuration files.
    - `controllers/`: Contains controllers for handling HTTP requests.
    - `models/`: Contains data models for the application.
    - `routes/`: Contains route definitions.
- `.dockerignore`: Lists files to ignore within Docker build context.
- `.env.template`: A template for environment variables.
- `.prettierrc`: Configuration for Prettier.
- `Dockerfile`: Docker configuration for the project.
- `package-lock.json`: Auto-generated file for npm dependencies.
- `package.json`: Lists project dependencies and scripts.
- `server.js`: The entry point of the application.
- `sonar-project.properties`: Configuration for SonarQube.

## Development Tools

- **Nodemon**: A tool that helps develop Node.js based applications by automatically restarting the node application
  when file changes in the directory are detected. Use the following command to run Nodemon:

```bash 
  npm run dev
```

- **Prettier**: An opinionated code formatter that enforces a consistent code style. Run the following command to use
  Prettier:

```bash 
  npm run prettier
```

## Usage

To start the server, you can use:

```bash 
  npm run start
```

For development, you can use Nodemon with:

```bash 
  npm run dev
```

To format your codebase with Prettier, run:

```bash 
npm run prettier
```