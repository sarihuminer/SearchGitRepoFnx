# Angular 17 Standalone Application

## Overview

This is a standalone Angular 17 application that implements user authentication and repository search functionality using Angular Material. The project manages REST calls using JWT (JSON Web Tokens) for secure communication.

## Features

- User authentication
- Repository search functionality
- Uses Angular Material for UI components
- JWT for managing API calls and authentication

## Prerequisites

Before you begin, ensure you have the following installed:

- Node.js (v12 or later)
- Angular CLI (v17)

## Installation

1. **Clone the repository:**

   ```bash
   git clone <repository-url>
   cd <project-directory>

2. **Install dependencies:**
Run the following command to install all required node modules:

   ```bash
    npm install

3. **Install Angular Material:**
If Angular Material is not already included, you can add it by running:

   ```bash
   ng add @angular/material

## Usage

1. **Start the application:**

Run the following command to start the development server:

    ```bash
    ng serve

The application will be running at http://localhost:4200.

## Login Credentials

To log in, use the following credentials:

- **Username:** `angularApp`
- **Password:** `<your-password>`

Replace `<your-password>` with any password you choose.

## Token Management

After logging in successfully, a token will be saved in the local storage. This token will be used for managing REST calls with JWT.

## How It Works

- When you enter the username and password, the application sends a request to the backend for authentication.
- Upon successful authentication, a JWT token is generated and stored in the local storage.
- All subsequent API calls are authenticated using this token, ensuring secure data transfer between the client and the server.

## Contributing

Contributions are welcome! If you have suggestions for improvements or new features, please open an issue or submit a pull request.

## License

This project is licensed under the MIT License. See the LICENSE file for more details.


   
