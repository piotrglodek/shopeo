import React from 'react';
import PropTypes from 'prop-types';

import {
  Section,
  SectionTitle,
  SectionSubTitle,
} from './productSection.components';

function ProductSection(props) {
  const { title, subTitle } = props;

  return (
    <Section>
      <SectionTitle>{title}</SectionTitle>
      <SectionSubTitle>{subTitle}</SectionSubTitle>
    </Section>
  );
}

export default ProductSection;

ProductSection.propTypes = {
  title: PropTypes.string.isRequired,
  subTitle: PropTypes.string.isRequired,
};
