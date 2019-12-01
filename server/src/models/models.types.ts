// eslint-disable-next-line no-unused-vars
import { Document } from 'mongoose';

export interface ProjectSchemaType extends Document {
  title: string;
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

export interface ProjectType {
  _id?: string;
  title?: string;
  dateCreated?: string;
  dateModified?: string;
  repositoryLink?: string;
  numberDependencies?: number;
  numberDevDependencies?: number;
  numberOutdatedDependencies?: number;
  numberOutdatedDevDependencies?: number;
  numberSecurityIssues?: number;
  description?: string;
}

export interface ProjectUpdateResponseType {
  success: boolean;
  message: string;
  project: ProjectType;
}

export interface ProjectDeleteResponseType {
  success: boolean;
  message: string;
}
