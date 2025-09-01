# MEAN Stack Counter App

A simple counter application built with the MEAN stack (MongoDB, Express.js, Angular, Node.js) as a monolithic application.

## Features

- Simple counter display
- Increment counter button
- Real-time updates
- MongoDB integration
- Responsive UI using Bootstrap

## Getting Started

### Prerequisites

- Docker and Docker Compose installed

### Running the Application

1. Clone this repository
2. Navigate to the project directory
3. Run the application:

```bash
docker-compose up
```

4. Open your browser and go to `http://localhost:3000`

## Project Structure

```
├── client/              # Angular frontend application
│   ├── src/
│   │   ├── app/
│   │   │   ├── counter/     # Counter component and service
│   │   │   ├── app.component.ts
│   │   │   └── app.module.ts
│   │   ├── index.html       # Main HTML file
│   │   └── styles.css       # Global styles
│   ├── angular.json         # Angular configuration
│   └── package.json         # Client dependencies
├── server/              # Node.js backend
│   ├── src/
│   │   ├── controllers/     # Express controllers
│   │   ├── models/          # Mongoose models
│   │   ├── routes/          # Express routes
│   │   └── app.js           # Express app configuration
│   └── public/              # Built Angular files (served by Express)
├── docker-compose.yml       # Docker configuration
├── Dockerfile              # Container setup
├── package.json            # Server dependencies
└── server.js               # Application entry point
```

## API Endpoints

- `GET /api/counter` - Get current counter value
- `POST /api/counter/increment` - Increment counter by 1

## Technologies Used

- **MongoDB** - Database for data persistence
- **Express.js** - Server framework
- **Angular** - Frontend framework (v20)
- **Node.js** - Runtime environment
- **Docker** - Containerization
- **Bootstrap** - UI styling

## Development

### Local Development Without Docker

1. Install dependencies:
```bash
npm install
cd client && npm install
```

2. Start MongoDB locally or use a cloud instance

3. Build the client:
```bash
npm run client:build
```

4. Start the server:
```bash
npm start
```

### Scripts Available

- `npm start` - Start the production server
- `npm run dev` - Start server with nodemon for development
- `npm run client:build` - Build Angular app for production
- `npm run client:dev` - Start Angular development server
- `npm run lint` - Run ESLint
- `npm run lint:fix` - Fix ESLint issues automatically

## Architecture

This is a monolithic MEAN stack application where:

- **Frontend**: Angular app is built and served as static files by Express
- **Backend**: Express.js server handles API routes and serves the Angular app
- **Database**: MongoDB stores the counter data
- **Deployment**: Single Docker container runs the entire application
