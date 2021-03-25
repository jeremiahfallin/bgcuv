import React from "react";
import PropTypes from "prop-types";
import { CovidPageTemplate } from "../../templates/covid-page";

const CovidPagePreview = ({ entry, widgetFor }) => {
  const data = entry.getIn(["data"]).toJS();

  return <CovidPageTemplate title={data.title} content={widgetFor("body")} />;
};

CovidPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
};

export default CovidPagePreview;
