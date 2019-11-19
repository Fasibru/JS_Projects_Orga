import { gql } from 'apollo-server-express';

const projectSchema = gql`
  type Query {
    project(id: ID!): Project
    projects: [Project]!
  }

  type Project {
    dateCreated: String
    dateModified: String
    repositoryLink: String
    numberDependencies: Int
    numberDevDependencies: Int
    numberOutdatedDependencies: Int
    numberOutdatedDevDependencies: Int
    numberSecurityIssues: Int
    description: String
  }
`;

export default projectSchema;
