import React from 'react';
import PropTypes from 'prop-types';

export default function Section({ title, children }) {
  return (
    <>
      <h2>{title}</h2>
      {children}
    </>
  );
}

Section.propTypes = {
  children: PropTypes.object.isRequired,
  title: PropTypes.string.isRequired,
};
