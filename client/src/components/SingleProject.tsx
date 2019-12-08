import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

export interface SingleProjectProps {
  title: string;
  dateCreated: string;
}

const SingleProject: React.SFC<SingleProjectProps> = ({
  title,
  dateCreated,
}) => {
  const date = new Date(Number(dateCreated)).toLocaleDateString();
  return (
    <Fragment>
      <div>{date}</div>
      <div>{title}</div>
    </Fragment>
  );
};

SingleProject.propTypes = {
  title: PropTypes.string.isRequired,
  dateCreated: PropTypes.string.isRequired,
};

export default SingleProject;
