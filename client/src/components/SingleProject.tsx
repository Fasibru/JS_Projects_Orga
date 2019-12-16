import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

export interface SingleProjectProps {
  title: string;
  dateCreated: string;
  dateModified: string;
}

const SingleProject: React.SFC<SingleProjectProps> = ({
  title,
  dateCreated,
  dateModified,
}) => {
  const dateOptions = {
    year: 'numeric',
    month: 'numeric',
    day: '2-digit',
  };
  const dateCreatedFormatted = new Date(Number(dateCreated)).toLocaleDateString('arab', dateOptions);
  const dateModifiedFormatted = new Date(Number(dateModified)).toLocaleDateString('arab', dateOptions);

  return (
    <SingleProjectWrapper>
      <ProjectLink href="">{title}</ProjectLink>
      <ProjectItem>{dateCreatedFormatted}</ProjectItem>
      <ProjectItem>{dateModifiedFormatted}</ProjectItem>
    </SingleProjectWrapper>
  );
};

const SingleProjectWrapper = styled.div`
  display: flex;
`;

const ProjectLink = styled.a`
  flex: 1;
  padding: 5px;
  border-left: 1px solid black;
  :last-child {
    border-right: 1px solid black;
  }
`;

const ProjectItem = styled.div`
  flex: 1;
  padding: 5px;
  border-left: 1px solid black;
  :last-child {
    border-right: 1px solid black;
  }
`;

SingleProject.propTypes = {
  title: PropTypes.string.isRequired,
  dateCreated: PropTypes.string.isRequired,
  dateModified: PropTypes.string,
};

SingleProject.defaultProps = {
  dateModified: '',
};

export default SingleProject;
