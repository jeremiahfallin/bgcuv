import React from "react";
import PropTypes from "prop-types";
import { SportsPageTemplate } from "../../templates/sports-page";

const SportsPagePreview = ({ entry, widgetFor }) => {
  return (
    <SportsPageTemplate
      image={entry.getIn(["data", "image"])}
      title={entry.getIn(["data", "title"])}
      heading={entry.getIn(["data", "heading"])}
      content={widgetFor("body")}
    />
  );
};

SportsPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func
  }),
  getAsset: PropTypes.func
};

export default SportsPagePreview;
