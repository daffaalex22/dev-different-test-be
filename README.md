# ExpressJS CRUD Project

This project is a simple ExpressJS application that implements CRUD operations for user management. It serves as a backend service that can be integrated with a frontend application.

## Project Structure

```
backend
├── src
│   ├── app.js                # Entry point of the application
│   ├── controllers           # Contains controllers for handling requests
│   │   └── userController.js  # User controller for CRUD operations
│   ├── models                # Contains data models
│   │   └── user.js           # User model defining the schema
│   ├── routes                # Contains route definitions
│   │   └── userRoutes.js     # User routes linking to controller methods
│   └── utils                 # Utility functions
│       └── db.js            # Database connection utility
├── package.json              # NPM configuration file
└── README.md                 # Project documentation
```

## Setup Instructions

1. **Clone the repository:**
   ```
   git clone <repository-url>
   cd backend
   ```

2. **Install dependencies:**
   ```
   npm install
   ```

3. **Set up the database:**
   Ensure you have a MongoDB instance running. Update the database connection details in `src/utils/db.js`.

4. **Start the server:**
   ```
   npm start
   ```

## Usage

- The server will run on `http://localhost:3000` by default.
- You can use tools like Postman or curl to interact with the API endpoints for user management.

## API Endpoints

- `POST /users` - Create a new user
- `GET /users/:id` - Retrieve a user by ID
- `PUT /users/:id` - Update a user by ID
- `DELETE /users/:id` - Delete a user by ID

## License

This project is licensed under the MIT License.