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

  input ProjectInput {
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

  extend type Mutation {
    createProject(title: String!): Project!
    FOOdeleteProject(id: ID!): Boolean!
    FOOupdateProject(id: ID!, data: ProjectInput!): Project!
  }
`;

export default projectSchema;
