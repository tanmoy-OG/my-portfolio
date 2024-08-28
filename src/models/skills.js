import mongoose from 'mongoose'

const { Schema } = mongoose

const skillSchema = new Schema({
  name: {
    type: String,
    required: true
  }
})

const Skill = mongoose.model('Skill', skillSchema)

export default Skill