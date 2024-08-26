import mongoose from 'mongoose';

const {Schema} = mongoose;

const projectSchema = new Schema({
  image: {
    String,
    required: true,
  },
  startDate: {
    String,
    required: true,
  },
  endDate: {
    String,
    required: true,
  },
  name: {
    String,
    required: true,
  },
  description: {
    String,
    required: true,
  },
  features: {
    Array,
    required: true,
  },
  techStack: {
    Array,
    required: true,
  },
  stars: Number,
  userCount: String,
  installCount: String,
});

const Project = mongoose.model('Project', projectSchema);

export default Project;
