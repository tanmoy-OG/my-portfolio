import mongoose from 'mongoose'

const { Schema } = mongoose

const experienceSchema = new Schema({
  startDate: {
    type: String,
    required: true
  },
  endDate: String,
  company: {
    type: String,
    required: true
  },
  companyLink: String,
  freelanceSite: String,
  position: {
    type: String,
    required: true
  },
  myContribution: Array,
  productsLink: Array,
  techStack: {
    type: Array,
    required: true
  },
  present: {
    type: Boolean,
    required: true
  },
  top: {
    type: Boolean,
    required: true
  }
})

const Experience = mongoose.model('Experience', experienceSchema)

export default Experience
