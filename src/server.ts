import mongoose from 'mongoose';
import config from './app/config';
import app from './app';

// Async function to start the server and connect to the database
async function server() {
  try {
    // Establish a connection to the MongoDB database
    await mongoose.connect(config.database_url as string);

    // Start the Express server and listen on the specified port
    app.listen(config.port, () => {
      console.log(`🚀 server is running on port ${config.port}`);
    });
  } catch (error: any) {
    console.error('Error connecting to the database:', error.message);
    console.error(error.stack);
    process.exit(1);
  }
}

server();
