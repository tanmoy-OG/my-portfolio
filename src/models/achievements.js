import mongoose from 'mongoose'

const { Schema } = mongoose

const achievementSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  link: {
    type: String,
    required: true
  },
  date: {
    type: String,
    required: true
  }
})

const Achievement = mongoose.model('Achievement', achievementSchema)

export default Achievement