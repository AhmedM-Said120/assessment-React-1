import React, { Component } from "react";
import styles from "./Footer.module.css";
class Footer extends Component {
  render() {
    return (
      <div className={`${styles.footColor} text-center`}>
        <div className="container ">
          <div className="row">
            <div className="col-4">
              <div className={`${styles.card}`}>
                <div className="card-body">
                  <h3
                    className={` ${styles.literSpace} mb-2 card-title fw-bold fs-4 text-white`}
                  >
                    LOCATION
                  </h3>
                  <p className="card-text text-white fs-5">2215 John Daniel Drive</p>
                  <p className="card-text text-white fs-5">Clark, MO 65243</p>
                </div>
              </div>
            </div>
            <div className="col-4">
              <div className={`${styles.card}`}>
                <div className="card-body">
                  <h3
                    className={`card-title ${styles.literSpace}  fw-bold fs-4 text-white`}
                  >
                    AROUND THE WEB
                  </h3>
                  <div className={`${styles.icons} text-white py-4`}>
                    <i className="fa-brands fa-facebook"></i>
                    <i className="fa-brands fa-twitter"></i>
                    <i className="fa-brands fa-linkedin"></i>
                    <i className="fa-solid fa-globe"></i>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-4">
              <div className={`${styles.card}`}>
                <div className="card-body">
                  <h3
                    className={` ${styles.literSpace} card-title mb-2  fw-bold fs-4 text-white`}
                  >
                    ABOUT FREELANCER
                  </h3>
                  <p className="card-text text-white fs-5">
                    Freelance is a free to use, licensed Bootstrap theme
                  </p>
                  <p className="text-white fs-5">created by Route</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Footer;
