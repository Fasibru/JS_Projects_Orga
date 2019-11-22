import mongoose from 'mongoose';

import { ProjectType, ProjectSchemaType } from '../models/types';

interface Models {
  Projects: mongoose.Model<ProjectSchemaType, {}>;
}

const projectResolvers = {
  // Query: {
  //   project: (
  //     root: unknown,
  //     { id }: { id: string },
  //     { models }: { models: object },
  //   ) => Object.values(models)[Number(id) - 1],
  //   projects: (
  //     root: unknown,
  //     args: null,
  //     { models } : { models: unknown },
  //   ) => Object.values(models),
  // },
  Mutation: {
    createProject: (
      root: unknown,
      { title }: { title: string},
      { models }: { models: Models },
    ): ProjectType => {
      const project = {
        title,
        dateCreated: new Date().toISOString(),
        dateModified: new Date().toISOString(),
        repositoryLink: 'http://test2.de',
        numberDependencies: Math.floor((Math.random() * 100)),
        numberDevDependencies: Math.floor((Math.random() * 100)),
        numberOutdatedDependencies: Math.floor((Math.random() * 100)),
        numberOutdatedDevDependencies: Math.floor((Math.random() * 100)),
        numberSecurityIssues: Math.floor((Math.random() * 100)),
        description: 'Dummy2',
      };

      const newProject = new models.Projects(project);
      // const newProject = new Project(req.body);
      newProject.save((err) => {
        if (err) {
          console.log('Error:', err.message);
        }
      });

      return project;
    },
  },
};

export default projectResolvers;
