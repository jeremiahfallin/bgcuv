import React from 'react';
import PropTypes from 'prop-types';
import { AthleticsPageTemplate } from '../../templates/athletics-page';

const AthleticsPagePreview = ({ entry, getAsset, widgetFor }) => {
  const data = entry.getIn(['data']).toJS();
  console.log(getAsset(data.image));
  return (
    <AthleticsPageTemplate
      image={getAsset(data.image)}
      title={entry.getIn(['data', 'title'])}
      heading={entry.getIn(['data', 'heading'])}
      content={widgetFor('body')}
      intro={entry.getIn(['data']).toJS().intro || {}}
    />
  );
};

AthleticsPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  getAsset: PropTypes.func,
};

export default AthleticsPagePreview;
