import React from "react";
import PropTypes from "prop-types";
import { SportsPageTemplate } from "../../templates/sports-page";

const SportsPagePreview = ({ entry, getAsset, widgetFor }) => {
  const data = entry.getIn(["data"]).toJS();
  console.log(getAsset(data.image));
  return (
    <SportsPageTemplate
      image={getAsset(data.image)}
      title={entry.getIn(["data", "title"])}
      heading={entry.getIn(["data", "heading"])}
      content={widgetFor("body")}
      intro={entry.getIn(["data"]).toJS().intro || {}}
    />
  );
};

SportsPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  getAsset: PropTypes.func,
};

export default SportsPagePreview;
