import mongoose from 'mongoose';

const {Schema} = mongoose;

const experienceSchema = new Schema({
  startDate: {
    String,
    required: true,
  },
  endDate: {
    String,
    required: true,
  },
  company: {
    String,
    required: true,
  },
  companyLink: String,
  freelanceSite: String,
  position: {
    String,
    required: true,
  },
  myContribution: {
    Array,
    required: true,
  },
  productsLink: Array,
  techStack: {
    Array,
    required: true,
  },
});

const Experience = mongoose.model('Experience', experienceSchema);

export default Experience;