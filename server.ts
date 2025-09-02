import mongoose from 'mongoose';
import app from './server/src/app';

// MongoDB connection
const mongoUri: string = process.env.MONGODB_URI || 'mongodb://localhost:27017/counter-app';

mongoose.connect(mongoUri)
  .then(() => {
    console.log('Connected to MongoDB successfully');
  })
  .catch((err: Error) => {
    console.error('Could not connect to MongoDB!');
    console.log(err);
    process.exit(1);
  });

// Start the server
const port: number = parseInt(process.env.PORT || '3000', 10);
const host: string = process.env.HOST || 'localhost';

app.listen(port, () => {
  console.log('--');
  console.log('Counter App - Development Environment');
  console.log('');
  console.log('Environment:     development');
  console.log(`Server:          http://${host}:${port}`);
  console.log(`Database:        ${mongoUri}`);
  console.log('--');
});
