interface IModels {
  id: string;
  title: string;
  dateCreated: string;
  dateModified: string;
  repositoryLink: string;
  numberDependencies: number;
  numberDevDependencies: number;
  numberOutdatedDependencies: number;
  numberOutdatedDevDependencies: number;
  numberSecurityIssues: number;
  description: string;
}

const projectResolvers = {
  Query: {
    project: (
      root: unknown,
      { id }: { id: string },
      { models }: { models: object },
    ) => Object.values(models)[Number(id) - 1],
    projects: (
      root: unknown,
      args: null,
      { models } : { models: unknown },
    ) => Object.values(models),
  },
  Mutation: {
    createProject: (
      root: unknown,
      { title }: { title: string},
      { models }: { models: object },
    ) => {
      const id = Math.floor((Math.random() * 100));
      const project = {
        id: String(id),
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

      // models[id] = project;

      return project;
    },
  },
};

export default projectResolvers;
