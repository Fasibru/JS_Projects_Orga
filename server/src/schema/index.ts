import { gql } from 'apollo-server-express';

import projectSchema from './schema.project';

/*
Empty underscore fields with a Boolean type,
because there is no official way of completing this action
of schema stitching yet.
*/
const linkSchema = gql`
  type Query {
    _: Boolean
  }

  type Mutation {
    _: Boolean
  }
`;

export default [linkSchema, projectSchema];
// import required schemas for Projects, Packages and User

/*
# Fetch projects with following data:
  - Date created
  - Date modified
  - Link to repo
  - #deps
  - #devDeps
  - #outdated deps
  - #outdated devDeps
  - #security issues
  - Description
# Update individual project data
# Fetch specific project data and list all dev/deps + comments

# Check NPM registry for updates of utilized dev/deps
# List all packages with usage statistics + versions
*/
