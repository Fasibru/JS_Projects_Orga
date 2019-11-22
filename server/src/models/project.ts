// eslint-disable-next-line no-unused-vars
import { Schema } from 'mongoose';

const ProjectSchema: Schema = new Schema({
  title: {
    type: String,
    required: true,
  },
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
