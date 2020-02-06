import React from "react";
import PropTypes from "prop-types";
import { EventsPageTemplate } from "../../templates/events-page";

const EventsPagePreview = ({ entry, widgetFor }) => {
  return (
    <EventsPageTemplate
      image={entry.getIn(["data", "image"])}
      title={entry.getIn(["data", "title"])}
      heading={entry.getIn(["data", "heading"])}
      content={widgetFor("body")}
      intro={entry.getIn(["data"]).toJS().intro || {}}
    />
  );
};

EventsPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func
  }),
  getAsset: PropTypes.func
};

export default EventsPagePreview;
