import React from "react";
import PropTypes from "prop-types";
import { EventPostTemplate } from "../../templates/event-post";

const EventPostPreview = ({ entry, widgetFor }) => {
  console.log(entry);
  return (
    <EventPostTemplate
      content={widgetFor("body")}
      description={entry.getIn(["data", "description"])}
      title={entry.getIn(["data", "title"])}
    />
  );
};

EventPostPreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func
  }),
  widgetFor: PropTypes.func
};

export default EventPostPreview;
