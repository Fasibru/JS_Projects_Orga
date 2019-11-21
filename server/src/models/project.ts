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

export const ProjectSchema: Schema = new Schema({
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

export const mockProjects = {
  1: {
    id: '1',
    dateCreated: '2019-11-18',
    dateModified: '2019-11-19',
    repositoryLink: 'http://test.de',
    numberDependencies: 6,
    numberDevDependencies: 3,
    numberOutdatedDependencies: 1,
    numberOutdatedDevDependencies: 0,
    numberSecurityIssues: 0,
    description: 'Dummy',
  },
  2: {
    id: '2',
    dateCreated: '2015-11-18',
    dateModified: '2016-11-19',
    repositoryLink: 'http://test2.de',
    numberDependencies: 21,
    numberDevDependencies: 30,
    numberOutdatedDependencies: 11,
    numberOutdatedDevDependencies: 6,
    numberSecurityIssues: 5,
    description: 'Dummy2',
  },
};
