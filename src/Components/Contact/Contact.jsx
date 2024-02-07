import React, { Component } from "react";
import StarDark from "../StarDark/StarDark";

class Contact extends Component {
  render() {
    return (
      <div>
        <div className="headerContain mt-5 mb-5 text-center">
          <h2>CONATCT SECTION</h2>
          <StarDark />
        </div>
        {/* star */}

        <div className=" container w-50">
          <input
            type="text"
            className="form-control py-3 mb-5 border-start-0 border-end-0 border-top-0 rounded-bottom-3 border-bottom mb-2"
            placeholder="userName "
          />
          <input
            type="text"
            className="form-control mb-5 py-3 border-start-0 border-end-0 border-top-0 rounded-bottom-3 border-bottom mb-2"
            placeholder="userAge "
          />
          <input
            type="email"
            className="form-control mb-5 py-3 border-start-0 border-end-0 border-top-0 rounded-bottom-3 border-bottom mb-2"
            placeholder="userEmail "
          />
          <input
            type="password"
            className="form-control mb-3 py-3 border-start-0 border-end-0 border-top-0 rounded-bottom-3 border-bottom mb-2"
            placeholder="userPassword "
          />
        <button className="btn btn-primary mb-5 text-white"> sent Massage</button>
        </div>
      </div>
    );
  }
}

export default Contact;
