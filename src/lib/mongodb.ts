import mongoose from 'mongoose'

const { MONGODB_URI } = process.env

const mongoDB = async () => {
    try {
        console.log('Connecting to MongoDB...')
        if (!MONGODB_URI) {
            console.log('Invalid/Missing environment variable: "MONGODB_URI"')
            throw new Error('Invalid/Missing environment variable: "MONGODB_URI"')
        }
        const db = mongoose.connection
        console.log('db')
        if (db.readyState >= 1) {
            console.log('MongoDB already connected')
            return
        }
        console.log('Connecting to MongoDB...2')
        await mongoose.connect(MONGODB_URI as string)
        db.on('open', () => {
            console.log('Connected to MongoDB successfully')
        })
        db.on('error', console.error.bind(console, 'MongoDB connection error, please make sure MongoDB is running: '))
    } catch (error) {
        console.error.bind(console, 'Shitt!! Something went wrong: ')
    }
}

export default mongoDB