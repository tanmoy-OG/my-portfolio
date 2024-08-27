import mongoose from 'mongoose'

const { MONGO_URI } = process.env

const connect = async () => {
  try {
    await mongoose.connect(MONGO_URI!)
    const db = mongoose.connection

    db.on('connected', () => {
      console.log('MongoDB connected successfully')
    })

    db.on('error', (error) => {
      console.error(
        'MongoDB connection error, please make sure MongoDB is running: ',
        error
      )
    })
  } catch (error) {
    console.error('Error connecting to database: ', error)
  }
}

export default connect
