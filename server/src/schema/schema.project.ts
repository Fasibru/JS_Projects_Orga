import { gql } from 'apollo-server-express';

const projectSchema = gql`
  type Query {
    project(id: ID!): Project
    projects: [Project]!
  }

  type Project {
    id: ID!
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

  type Mutation {
    createProject(title: String!): Project!
  }
`;

export default projectSchema;
