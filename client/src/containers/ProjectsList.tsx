import React, { Fragment, useEffect, useState } from 'react';
import { useQuery } from '@apollo/react-hooks';
import gql from 'graphql-tag';

import SingleProject from '../components/SingleProject';
import { ProjectType } from '../types/types';

const GET_PROJECTS = gql`
  query {
    projects {
      _id
      title
      dateCreated
    }
  }
`;

const ProjectsList: React.SFC = () => {
  const { data, loading, error } = useQuery(GET_PROJECTS);

  if (loading) return <h1>Loading...</h1>;
  if (error) return <h1>Error: {error.message}</h1>;

  return (
    <Fragment>
      {data.projects.map((project: ProjectType) => (
        <SingleProject
          key={project._id}
          title={project.title}
          dateCreated={project.dateCreated}
        />
      ))}
    </Fragment>
  );
};

export default ProjectsList;
