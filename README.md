# Property Management API

A RESTful API built with Express.js and Supabase for managing property listings. This service provides endpoints for creating, reading, updating, and deleting property listings with features like location tracking, price management, and property details.

## API Documentation

Interactive API documentation is available at:

```
http://localhost:8080/api-docs
```

This documentation provides detailed information about all available endpoints, request/response formats, and example payloads.

## Project Structure

```
backend
├── src
│   ├── app.js                    # Application entry point
│   ├── controllers
│   │   └── propertyController.js # Property CRUD operations
│   ├── routes
│   │   └── propertyRoutes.js     # API route definitions
│   └── utils
│       ├── db.js                 # Supabase connection utility
│       └── logger.js             # Logging utility
├── seeder
│   ├── seed_1.sql               # San Francisco property seeds
│   └── seed_2.sql               # New York property seeds
├── package.json
└── README.md
```

## Technologies

- Node.js
- Express.js
- Supabase (Database)
- dotenv (Environment Configuration)

## Setup Instructions

1. **Clone the repository:**
   ```bash
   git clone <repository-url>
   cd backend
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Environment Configuration:**
   Create a `.env` file in the root directory with your Supabase credentials:
   ```
   SUPABASE_URL=your_supabase_url
   SUPABASE_KEY=your_supabase_key
   PORT=8080
   ```

4. **Start the server:**
   ```bash
   # Development mode with hot reload
   npm run dev

   # Production mode
   npm start
   ```

## API Endpoints

### Properties
- `POST /properties` - Create a new property listing
- `GET /properties` - Retrieve all properties
- `GET /properties/:id` - Retrieve a specific property
- `PUT /properties/:id` - Update a property
- `DELETE /properties/:id` - Delete a property

### Request Body Format (Create/Update)
```json
{
  "title": "Luxury Penthouse",
  "price": 8500000,
  "lat": 40.767778,
  "lng": -73.971111,
  "image_url": "https://example.com/image.jpg",
  "bedrooms": 4,
  "bathrooms": 4.5,
  "description": "Stunning penthouse with panoramic views"
}
```

## Database Seeding

The project includes seed files for populating the database with sample properties:
- `seed_1.sql`: San Francisco properties
- `seed_2.sql`: New York properties

To run the seeds, execute the SQL files in your Supabase SQL editor.

## Development

The project uses `nodemon` for development, which automatically restarts the server when files change.

## License

This project is licensed under the ISC License.
