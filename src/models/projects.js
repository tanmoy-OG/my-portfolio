import mongoose from 'mongoose'

const { Schema } = mongoose

const projectSchema = new Schema({
  image: {
    type: String,
    required: true
  },
  date: {
    type: String,
    required: true
  },
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  features: {
    type: Array,
    required: true
  },
  techStack: {
    type: Array,
    required: true
  },
  // stars: Number,
  // userCount: String,
  // installCount: String,
  top: {
    type: Boolean,
    required: true
  }
})

const Project = mongoose.model('Project', projectSchema)

export default Project
