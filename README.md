# GameZone
### Your Ultimate Video Game Marketplace 

![image](https://github.com/user-attachments/assets/f403f2d7-82ed-4b5f-8cde-21919af5d736)

## Overview
GameZone is a comprehensive web application developed to provide a seamless platform for purchasing video games from various companies, delivering them anywhere in the world. This project aims to create a functional web application with a robust backend, database-backend connection, and API testing. The first release includes essential elements and progression towards a fully polished site. This README will be updated in every delivery.

## Features
- **CRUD Operations**: Create, Read, Update, and Delete operations for user and product objects.
- **Authentication and Authorization**: Secure user authentication and authorization using JWT and bcrypt.
- **API Testing**: Comprehensive API testing for user and product operations.
- **MVC Structure**: Organized codebase following the Model-View-Controller structure using Express and Node.js.
- **Database Integration**: Efficient database setup and management using MongoDB.

## Project Structure
- **controllers**: Contains the logic for handling requests and responses.
- **middleware**: Includes authentication and other middleware functions.
- **models**: Defines the database schemas and models.
- **routes**: Manages the routing for different endpoints.
- **server.js**: The main entry point of the application.

## Installation
To get started with GameZone, follow these steps:

### 1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/GameZone.git

### 2. Install dependencies:
```bash
npm install
```

### 3. Set up environment variables:

Create a `.env` file in the root directory and add the following variables:
```
PORT=3000
MONGODB_URI=your_mongodb_uri
JWT_SECRET=your_jwt_secret
```

### 4. Start the application:
```bash
npm start
```

## Usage

Once the application is running, you can access it at [http://localhost:3000](http://localhost:3000). The following sections provide an overview of the key functionalities:

### Home/Landing Page

The Home/Landing Page serves as the entry point for users visiting GameZone. It features a visually appealing design with easy navigation to various sections of the website. Users can quickly access the latest game releases, featured titles, and promotional offers.

### SignUp Page

The SignUp Page allows new users to create an account on GameZone. The page includes a user-friendly registration form with fields for entering personal information, such as name, email, and password. The design ensures a smooth and straightforward registration process.

### SignIn Page

The SignIn Page enables existing users to log in to their GameZone accounts. The page features a simple login form where users can enter their email and password. Additional options, such as "Forgot Password" links, are also available to assist users in case they need to reset their credentials.

### Product Navigation Page

The Product Navigation Page provides users with an organized and intuitive way to browse through the extensive game library available on GameZone. Users can filter and search for games based on various criteria, such as genre, platform, and release date. The design ensures that users can easily find and explore their favorite titles.

## API Documentation

The following endpoints are available for interacting with the GameZone API:

### Authentication Endpoints

- `POST /signup`: Registers a new user.
- `POST /signin`: Authenticates a user and returns a JWT token.
- `POST /signout`: Logs out a user and invalidates the JWT token.

### CRUD Endpoints

- `GET /games`: Retrieves a list of all games.
- `POST /games`: Adds a new game to the database.
- `PUT /games/:id`: Updates an existing game.
- `DELETE /games/:id`: Deletes a game from the database.

## Testing

GameZone includes comprehensive testing to ensure the application functions correctly. The following testing strategies are used:

- **Unit Testing**: Tests individual components and functions to ensure they work as expected.
- **Integration Testing**: Tests the interaction between different components and modules.
- **End-to-End Testing**: Tests the entire application flow from start to finish to ensure it works as a whole.

## Deployment

To deploy GameZone, follow these steps:

### 1. Build the application:
```bash
npm run build
```

### 2. Deploy to a hosting platform (e.g., Heroku, AWS):
```bash
git push heroku master
```

### 3. Monitor the application:

Please keep an eye on the application for any issues and make sure it is running smoothly.

## Contributing

We welcome contributions to GameZone! If you would like to contribute, please follow these steps:

1. Fork the repository.
2. Create a new branch:
    ```bash
    git checkout -b feature/your-feature-name
    ```
3. Make your changes.
4. Commit your changes:
    ```bash
    git commit -m "Add your commit message"
    ```
5. Push to the branch:
    ```bash
    git push origin feature/your-feature-name
    ```
6. Create a pull request.

