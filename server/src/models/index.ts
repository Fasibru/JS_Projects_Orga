import mongoose from 'mongoose';

// eslint-disable-next-line no-unused-vars
import ProjectSchema, { ProjectSchemaType } from './project';

const dbConnection = async () => {
  try {
    await mongoose.connect(process.env.DB_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('Connection to MongoDB established');
  } catch (error) {
    console.log(`MongoDB ERROR: ${error}`);
  }
};

export const models = {
  Projects: mongoose.model<ProjectSchemaType>('Projects', ProjectSchema),
};

export default dbConnection;
