// eslint-disable-next-line no-unused-vars
import { Schema, Document } from 'mongoose';

export interface ProjectSchemaType extends Document {
  dateCreated: string;
  dateModified: string;
  repositoryLink: string;
  numberDependencies: number;
  numberDevDependencies: number;
  numberOutdatedDependencies: number;
  numberOutdatedDevDependencies: number;
  numberSecurityIssues: number;
  description: string;
}

const ProjectSchema: Schema = new Schema({
  dateCreated: {
    type: Date,
    default: Date.now,
  },
  dateModified: {
    type: Date,
  },
  repositoryLink: {
    type: String,
  },
  numberDependencies: {
    type: Number,
  },
  numberDevDependencies: {
    type: Number,
  },
  numberOutdatedDependencies: {
    type: Number,
  },
  numberOutdatedDevDependencies: {
    type: Number,
  },
  numberSecurityIssues: {
    type: Number,
  },
  description: {
    type: String,
  },
});

export default ProjectSchema;
