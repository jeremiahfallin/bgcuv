import React from "react";
import PropTypes from "prop-types";
import { IconContext } from "react-icons";
import { FaGraduationCap, FaSeedling, FaUsers } from "react-icons/fa";

import RadialChart from "./RadialChart";

const FeatureGrid = ({ gridItems }) => {
  const faIcons = [<FaGraduationCap />, <FaSeedling />, <FaUsers />];
  const colors = ["#0ff0f0", "#84bd00", "#FF8000"];
  gridItems.forEach((item, i) => {
    item.color = colors[i];
    item.icon = faIcons[i];
  });
  return (
    <div className="columns is-multiline">
      {gridItems.map((item) => (
        <div key={item.text} className="column is-4">
          <section className="section">
            <div className="has-text-centered">
              <div
                style={{
                  width: "240px",
                  display: "inline-block",
                }}
              >
                <RadialChart
                  percent={`${item.percent / 100.0}`}
                  color={`${item.color}`}
                  icon={`${item.icon}`}
                >
                  <IconContext.Provider
                    value={{
                      color: "white",
                      size: "3.5em",
                      className: "global-class-name",
                    }}
                  >
                    {item.icon}
                  </IconContext.Provider>
                </RadialChart>
              </div>
            </div>
            <p>{item.text}</p>
          </section>
        </div>
      ))}
    </div>
  );
};

FeatureGrid.propTypes = {
  gridItems: PropTypes.arrayOf(
    PropTypes.shape({
      image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
      text: PropTypes.string,
    })
  ),
};

export default FeatureGrid;
