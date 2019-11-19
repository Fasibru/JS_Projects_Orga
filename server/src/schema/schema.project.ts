import { gql } from 'apollo-server-express';

const projectSchema = gql`
  type Query {
    project(id: ID!): Project
    projects: [Project]!
  }

  
`;

export default projectSchema;
