import React, { Component } from "react";
import StarLine from "../StarAndLine/StarLine";
import StyleCss from "./About.module.css";
class About extends Component {
  render() {
    return (
      <div className={`overflow-hidden ${StyleCss.bgAbout}`}>
        <div className={StyleCss.textHead}>
          <h2>ABOUT COMPONENT</h2>
        </div>
        {/* star */}
        <StarLine />
        {/*Cards  */}

        <div className="row w-75">
          <div className="col-sm-6 mb-3 mb-sm-0">
            <div className={StyleCss.card}>
              <div className="card-body">
                <p className="card-text">
                  Freelancer is a free bootstrap theme created by Route. The
                  download includes the complete source files including HTML,
                  CSS, and JavaScript as well as optional SASS stylesheets for
                  easy customization.
                </p>
              </div>
            </div>
          </div>
          <div className="col-sm-6">
            <div className={StyleCss.card}>
              <div className="card-body">
                <p className="card-text">
                  Freelancer is a free bootstrap theme created by Route. The
                  download includes the complete source files including HTML,
                  CSS, and JavaScript as well as optional SASS stylesheets for
                  easy customization.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default About;
