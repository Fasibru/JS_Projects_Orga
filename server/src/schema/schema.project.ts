import { gql } from 'apollo-server-express';

const projectSchema = gql`
  extend type Query {
    project(id: ID!): Project
    projects: [Project]!
  }

  type Project {
    _id: ID!
    title: String
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

  type ProjectUpdateResponse {
    success: Boolean!
    message: String!
    project: Project
  }

  type ProjectDeleteResponse {
    success: Boolean!
    message: String!
  }

  input ProjectInput {
    title: String
    dateModified: String
    repositoryLink: String
    numberDependencies: Int
    numberDevDependencies: Int
    numberOutdatedDependencies: Int
    numberOutdatedDevDependencies: Int
    numberSecurityIssues: Int
    description: String
  }

  extend type Mutation {
    createProject(title: String!): ProjectUpdateResponse!
    deleteProject(id: ID!): ProjectDeleteResponse!
    updateProject(id: ID!, data: ProjectInput!): ProjectUpdateResponse!
  }
`;

export default projectSchema;
