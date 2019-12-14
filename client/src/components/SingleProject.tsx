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
      <ProjectItem>{dateCreatedFormatted}</ProjectItem>
      <ProjectItem>{dateModifiedFormatted}</ProjectItem>
      <ProjectItem>{title}</ProjectItem>
    </SingleProjectWrapper>
  );
};

const SingleProjectWrapper = styled.div`
  display: flex;
  margin-top: 5px;
  margin-bottom: 5px;
`;

const ProjectItem = styled.div`
  flex: 1;
  padding-left: 5px;
  padding-right: 5px;
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
