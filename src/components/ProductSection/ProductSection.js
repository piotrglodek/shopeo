import React from 'react';
import PropTypes from 'prop-types';
import { Section, SectionTitle } from './productSection.components';

function ProductSection(props) {
  const { title, children } = props;
  return (
    <Section>
      <SectionTitle>{title}</SectionTitle>
      {children}
    </Section>
  );
}

export default ProductSection;

ProductSection.propTypes = {
  title: PropTypes.string.isRequired,
};
