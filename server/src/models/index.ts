import mongoose from 'mongoose';

import ProjectSchema from './models.project';
import { ProjectSchemaType } from './models.types';


const dbConnection = async (): Promise<void> => {
  try {
    await mongoose.connect(process.env.DB_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
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
