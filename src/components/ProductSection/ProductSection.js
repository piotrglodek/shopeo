import React from 'react';
import PropTypes from 'prop-types';
import { Slider } from '../';
import { Section, SectionTitle } from './productSection.components';

function ProductSection(props) {
  const { title, shoes } = props;
  return (
    <Section>
      <SectionTitle>{title}</SectionTitle>
      <Slider title={title} shoes={shoes} />
    </Section>
  );
}

export default ProductSection;

ProductSection.propTypes = {
  title: PropTypes.string.isRequired,
};
