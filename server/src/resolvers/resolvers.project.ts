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
};

export default projectResolvers;
