import mongoose from 'mongoose';

import {
  ProjectType,
  ProjectDeleteResponseType,
  ProjectSchemaType,
  ProjectUpdateResponseType,
} from '../models/types';

interface Models {
  Projects: mongoose.Model<ProjectSchemaType, {}>;
}

const projectResolvers = {
  Query: {
    project: async (
      root: unknown,
      { id }: { id: string },
      { models }: { models: Models },
    ): Promise<ProjectType> => {
      const project = await models.Projects.findById(id);
      return project;
    },
    projects: async (
      root: unknown,
      args: null,
      { models }: { models: Models },
    ): Promise<Array<ProjectType>> => {
      const projects = await models.Projects.find();
      return projects;
    },
  },
  Mutation: {
    createProject: async (
      root: unknown,
      { title }: { title: string},
      { models }: { models: Models },
    ): Promise<ProjectUpdateResponseType> => {
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

      let res: ProjectUpdateResponseType;
      try {
        res = {
          success: true,
          message: `Project "${title}" successfully created.`,
          project: await new models.Projects(project).save(),
        };
      } catch (error) {
        res = {
          success: false,
          message: error.message,
          project: {
            _id: '',
            title,
            ...project,
          },
        };
      }

      return res;
    },
    deleteProject: async (
      root: unknown,
      { id }: { id: string},
      { models }: { models: Models },
    ): Promise<ProjectDeleteResponseType> => {
      try {
        const res = await models.Projects.findByIdAndDelete(id);
        if (res === null) {
          return {
            success: false,
            message: 'Project not found.',
          };
        }
        return {
          success: true,
          message: 'Project successfully deleted.',
        };
      } catch (error) {
        return {
          success: false,
          message: error.message,
        };
      }
    },
    updateProject: async (
      root: unknown,
      { id, data }: { id: string; data: ProjectType },
      { models }: { models: Models },
    ): Promise<ProjectUpdateResponseType> => {
      try {
        const res = await models.Projects.findOneAndUpdate(
          { _id: id },
          {
            ...data,
            dateModified: new Date().toISOString(),
          },
          { new: true },
        );
        if (res === null) {
          return {
            success: false,
            message: `Project "${data.title}" does not exist.`,
            project: res,
          };
        }
        return {
          success: true,
          message: `Project "${data.title}" successfully updated.`,
          project: res,
        };
      } catch (error) {
        return {
          success: false,
          message: `Error while updating project "${data.title}".\n Error: ${error.message}`,
          project: data,
        };
      }
    },
  },
};

export default projectResolvers;
