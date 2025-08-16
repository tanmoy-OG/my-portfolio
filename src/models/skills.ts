import mongoose, { Document, Schema } from 'mongoose';

interface ISkill extends Document {
  name: string;
}

const skillSchema = new Schema<ISkill>({
  name: {
    type: String,
    required: true,
  },
});

const Skill = mongoose.model<ISkill>('Skill', skillSchema);

export default Skill;
