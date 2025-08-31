# MEAN Stack Counter App

A simple counter application built with the MEAN stack (MongoDB, Express.js, AngularJS, Node.js) using the meanjs/mean Docker image.

## Features

- Simple counter display
- Increment counter button
- Real-time updates
- MongoDB with transaction support
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
5. Navigate to the Counter page from the top menu

## Project Structure

```
modules/counter/
├── client/
│   ├── config/          # Client-side configuration
│   ├── controllers/     # AngularJS controllers
│   ├── services/        # AngularJS services
│   └── views/           # HTML templates
└── server/
    ├── config/          # Server configuration
    ├── controllers/     # Express controllers
    ├── models/          # Mongoose models
    └── routes/          # Express routes
```

## API Endpoints

- `GET /api/counter` - Get current counter value
- `POST /api/counter/increment` - Increment counter by 1

## Technologies Used

- **MongoDB** - Database with transaction support
- **Express.js** - Server framework
- **AngularJS** - Frontend framework
- **Node.js** - Runtime environment
- **Docker** - Containerization
- **Bootstrap** - UI styling
