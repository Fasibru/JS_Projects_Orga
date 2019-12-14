import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Wrapper = styled.div`
  font-family: arial;
  display: flex;
  margin-top: 5px;
  margin-bottom: 5px;
`;

const ProjectItem = styled.div`
  flex: 1;
  padding-left: 5px;
  padding-right: 5px;
`;

export interface SingleProjectProps {
  title: string;
  dateCreated: string;
}

const SingleProject: React.SFC<SingleProjectProps> = ({
  title,
  dateCreated,
}) => {
  const dateOptions = {
    year: 'numeric',
    month: 'numeric',
    day: '2-digit',
  };
  const date = new Date(Number(dateCreated)).toLocaleDateString('arab', dateOptions);
  return (
    <Wrapper>
      <ProjectItem>{date}</ProjectItem>
      <ProjectItem>{title}</ProjectItem>
    </Wrapper>
  );
};

SingleProject.propTypes = {
  title: PropTypes.string.isRequired,
  dateCreated: PropTypes.string.isRequired,
};

export default SingleProject;
