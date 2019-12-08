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
