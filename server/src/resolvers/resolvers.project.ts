import mongoose from 'mongoose';

import {
  ProjectType,
  ProjectDeleteResponseType,
  ProjectSchemaType,
  ProjectUpdateResponseType,
} from '../models/models.types';

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
      { data }: { data: ProjectType},
      { models }: { models: Models },
    ): Promise<ProjectUpdateResponseType> => {
      let res: ProjectUpdateResponseType;
      try {
        res = {
          success: true,
          message: `Project "${data.title}" successfully created.`,
          project: await new models.Projects(data).save(),
        };
      } catch (error) {
        res = {
          success: false,
          message: error.message,
          project: {
            _id: '',
            ...data,
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
