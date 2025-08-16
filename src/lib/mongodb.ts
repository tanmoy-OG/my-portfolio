import mongoose from 'mongoose';

const { MONGODB_URI } = process.env;

const mongoDB = async () => {
  try {
    if (!MONGODB_URI) {
      throw new Error('Invalid/Missing environment variable: "MONGODB_URI"');
    }
    const db = mongoose.connection;
    if (db.readyState >= 1) return;
    await mongoose.connect(MONGODB_URI as string);
    if (process.env.NODE_ENV === 'development') {
      db.on('open', () => {
        // eslint-disable-next-line no-console
        console.log('Connected to MongoDB successfully');
      });
      db.on(
        'error',
        console.error.bind(
          console,
          'MongoDB connection error, please make sure MongoDB is running: '
        )
      );
    }
  } catch (error) {
    console.error.bind(console, 'Shitt!! Something went wrong: ', error);
  }
};

export default mongoDB;
