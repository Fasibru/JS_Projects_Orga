import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import gql from 'graphql-tag';
import styled from 'styled-components';

import SingleProject from '../components/SingleProject';
import Headers from '../components/Headers';
import { ProjectType } from '../types/types';
import { colorSnow } from '../styles/colors';

const GET_PROJECTS = gql`
  query {
    projects {
      _id
      title
      dateCreated
      dateModified
    }
  }
`;

const ProjectsList: React.SFC = () => {
  const { data, loading, error } = useQuery(GET_PROJECTS);

  if (loading) return <h1>Loading...</h1>;
  if (error) return <h1>Error: {error.message}</h1>;

  return (
    <ProjectsListWrapper>
      <Headers />
      {data.projects.map((project: ProjectType) => (
        <SingleProject
          key={project._id}
          title={project.title}
          dateCreated={project.dateCreated}
          dateModified={project.dateModified}
        />
      ))}
    </ProjectsListWrapper>
  );
};

const ProjectsListWrapper = styled.section`
  display: flex;
  flex-direction: column;
  font-family: Arial, Helvetica, sans-serif;
  background-color: ${colorSnow};
`;

export default ProjectsList;
