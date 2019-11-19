// const mockProjects = {
//   1: {
//     id: '1',
//     dateCreated: '2019-11-18',
//     dateModified: '2019-11-19',
//     repositoryLink: 'http://test.de',
//     numberDependencies: 6,
//     numberDevDependencies: 3,
//     numberOutdatedDependencies: 1,
//     numberOutdatedDevDependencies: 0,
//     numberSecurityIssues: 0,
//     description: 'Dummy',
//   },
//   2: {
//     id: '2',
//     dateCreated: '2015-11-18',
//     dateModified: '2016-11-19',
//     repositoryLink: 'http://test2.de',
//     numberDependencies: 21,
//     numberDevDependencies: 30,
//     numberOutdatedDependencies: 11,
//     numberOutdatedDevDependencies: 6,
//     numberSecurityIssues: 5,
//     description: 'Dummy2',
//   },
// };
const mockProjects = [
  {
    id: '1',
    title: 'Test 1',
    dateCreated: '2019-11-18',
    dateModified: '2019-11-19',
    repositoryLink: 'http://test.de',
    numberDependencies: 6,
    numberDevDependencies: 3,
    numberOutdatedDependencies: 1,
    numberOutdatedDevDependencies: 0,
    numberSecurityIssues: 0,
    description: 'Dummy',
  },
  {
    id: '2',
    title: 'Test 2',
    dateCreated: '2015-11-18',
    dateModified: '2016-11-19',
    repositoryLink: 'http://test2.de',
    numberDependencies: 21,
    numberDevDependencies: 30,
    numberOutdatedDependencies: 11,
    numberOutdatedDevDependencies: 6,
    numberSecurityIssues: 5,
    description: 'Dummy2',
  },
];

const projectResolvers = {
  Query: {
    project: (root: unknown, { id }: { id: number }) => mockProjects[id - 1],
    projects: () => mockProjects,
  },
  Mutation: {
    createProject: (root: unknown, { title }: { title: string}) => {
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

      mockProjects[id] = project;

      return project;
    },
  },
};

export default projectResolvers;
