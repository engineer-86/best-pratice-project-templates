### By Konrad Münch B-Eng.
# Project Structure Best Practices

This guide outlines the state-of-the-art structure for setting up projects across different programming languages and technologies, including JavaScript, TypeScript, Python, and C#. It also covers the use of Docker and Docker Compose for containerization and orchestration of applications.

## Language Specific Guides

Each programming language has its nuances and best practices for setting up a clean and efficient project structure. Refer to the following guides for language-specific recommendations:

- [JavaScript Project Guide](./js/express/javascript.md)
- [TypeScript Project Guide](./ts/type_script.md)
- [Python Project Guide](./python/py.md)
- [C# Project Guide](./csharp/cs.md)

These guides include instructions on setting up the environment, organizing the project directory, best practices for coding, and additional resources.

## Docker and Docker Compose

Docker provides the ability to package and run an application in a loosely isolated environment called a container. Docker Compose is a tool for defining and running multi-container Docker applications. For more details on how to use these tools within your projects, refer to the following guides:

- [Docker Guide](./js/express/Dockerfile)
- [Docker Compose Guide](./docker-compose/compose.md)

These documents will help you understand the basics of Docker, how to build images, manage containers, and orchestrate them using Docker Compose.

## Style Guides

Following style guides ensures that your code is not only readable but also consistent and maintainable. Here are links to Google's style guides for each language, which you can refer to when contributing to projects:

- JavaScript: [Google JavaScript Style Guide](https://google.github.io/styleguide/jsguide.html)
- TypeScript: [Google TypeScript Style Guide](https://google.github.io/styleguide/tsguide.html)
- Python: [Google Python Style Guide](https://google.github.io/styleguide/pyguide.html)
- C#: [Google C# Style Guide](https://google.github.io/styleguide/csharp-style.html)

Adhering to these style guides will help maintain a high standard of code quality within your projects.

## Core Principles

When setting up a project, there are three core principles to keep in mind to ensure success:

- **Clean Code Base**: 
  - Initialize with a clean repository setup.
  - Include `.gitignore` to exclude unnecessary files.
  
- **Structured and Comment-Free Modularity**: 
  - **Main Code File**: Establish a clear entry point for the application.
  - **Helper Functions**: Isolate reusable code into helper functions.
  - **Service Layer**: Abstract business logic into service modules (Controller)
  - **Components/Classes**: Organize related functions into classes or components.
  - → **Example**: If you have a function that handles user authentication, instead of placing it directly in the server file, extract it to a dedicated `authService.js` module.
  - → **Example**: For database operations, create a `db` folder with models for each entity and a `databaseService.js` that handles the interaction with these models.

- **Secure Credential Storage**: 
  - Utilize `.env` files to manage environment variables.
  - Keep sensitive information out of the codebase.
