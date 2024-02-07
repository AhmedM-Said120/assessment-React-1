import React, { Component } from "react";
import img1 from "../../assests/imgs/port1.png";
import img2 from "../../assests/imgs/port2.png";
import img3 from "../../assests/imgs/port3.png";
import Style from "./Portfolio.module.css";
import StarDark from "../StarDark/StarDark";
class Portfolio extends Component {
  render() {
    return (
      <div className="container mt-5">
        <div className={Style.textHead}>
          <h2>PORTFOLIO COMPONENT</h2>
        </div>
         <StarDark/>
        <div className="row mt-4">
          <div className="col-md-4">
            <div>
              <img
                src={img1}
                alt=""
                data-bs-toggle="modal"
                data-bs-target="#staticBackdrop"
                className="w-100 g-3 rounded-4"
              />

              {/*  */}

              <div
                class="modal fade"
                id="staticBackdrop"
                data-bs-backdrop="static"
                data-bs-keyboard="false"
                tabindex="-1"
                aria-labelledby="staticBackdropLabel"
                aria-hidden="true"
              >
                <div className="modal-dialog">
                  <div className="modal-content">
                    <div className="modal-body">
                      <button
                        type="button"
                        className="btn-close"
                        data-bs-dismiss="modal"
                        aria-label="Close"
                      ></button>
                      <img
                        src={img1}
                        className="w-100 rounded-4 d-block"
                        alt=""
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* 2 */}
          <div className="col-md-4">
            <img
              src={img2}
              alt=""
              data-bs-toggle="modal"
              data-bs-target="#sstaticBackdrop"
              className="w-100 rounded-4"
            />

            {/*  */}

            <div
              class="modal fade"
              id="sstaticBackdrop"
              data-bs-backdrop="static"
              data-bs-keyboard="false"
              tabindex="-1"
              aria-labelledby="staticBackdropLabel"
              aria-hidden="true"
            >
              <div className="modal-dialog">
                <div className="modal-content">
                  <div className="modal-body">
                    <button
                      type="button"
                      className="btn-close"
                      data-bs-dismiss="modal"
                      aria-label="Close"
                    ></button>
                    <img
                      src={img2}
                      className="w-100 rounded-4 d-block"
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* 3 */}
          <div className="col-md-4">
            <img
              src={img3}
              alt=""
              data-bs-toggle="modal"
              data-bs-target="#staaaticBackdrop"
              className="w-100 rounded-4"
            />

            {/*  */}

            <div
              class="modal fade"
              id="staaaticBackdrop"
              data-bs-backdrop="static"
              data-bs-keyboard="false"
              tabindex="-1"
              aria-labelledby="staticBackdropLabel"
              aria-hidden="true"
            >
              <div className="modal-dialog">
                <div className="modal-content">
                  <div className="modal-body">
                    <button
                      type="button"
                      className="btn-close"
                      data-bs-dismiss="modal"
                      aria-label="Close"
                    ></button>
                    <img
                      src={img3}
                      className="w-100 rounded-4 d-block"
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* 4 */}
          <div className="col-md-4 mt-5 mb-5">
            <img
              src={img3}
              alt=""
              data-bs-toggle="modal"
              data-bs-target="#statreicBackdrop"
              className="w-100 rounded-4"
            />

            {/*  */}

            <div
              class="modal fade"
              id="statreicBackdrop"
              data-bs-backdrop="static"
              data-bs-keyboard="false"
              tabindex="-1"
              aria-labelledby="staticBackdropLabel"
              aria-hidden="true"
            >
              <div className="modal-dialog">
                <div className="modal-content">
                  <div className="modal-body">
                    <button
                      type="button"
                      className="btn-close"
                      data-bs-dismiss="modal"
                      aria-label="Close"
                    ></button>
                    <img
                      src={img3}
                      className="w-100 rounded-4 d-block"
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* 5 */}
          <div className="col-md-4  mt-5 mb-5">
            <img
              src={img1}
              alt=""
              data-bs-toggle="modal"
              data-bs-target="#stahgticBackdrop"
              className="w-100 rounded-4"
            />

            {/*  */}

            <div
              class="modal fade"
              id="stahgticBackdrop"
              data-bs-backdrop="static"
              data-bs-keyboard="false"
              tabindex="-1"
              aria-labelledby="staticBackdropLabel"
              aria-hidden="true"
            >
              <div className="modal-dialog">
                <div className="modal-content">
                  <div className="modal-body">
                    <button
                      type="button"
                      className="btn-close"
                      data-bs-dismiss="modal"
                      aria-label="Close"
                    ></button>
                    <img
                      src={img1}
                      className="w-100 rounded-4 d-block"
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* 6 */}
          <div className="col-md-4 mt-5 mb-5">
            <img
              src={img2}
              alt=""
              data-bs-toggle="modal"
              data-bs-target="#sataticBackdrop"
              className="w-100 rounded-4"
            />

            {/*  */}

            <div
              class="modal fade"
              id="sataticBackdrop"
              data-bs-backdrop="static"
              data-bs-keyboard="false"
              tabindex="-1"
              aria-labelledby="staticBackdropLabel"
              aria-hidden="true"
            >
              <div className="modal-dialog">
                <div className="modal-content">
                  <div className="modal-body">
                    <button
                      type="button"
                      className="btn-close"
                      data-bs-dismiss="modal"
                      aria-label="Close"
                    ></button>
                    <img
                      src={img2}
                      className="w-100 rounded-4 d-block"
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Portfolio;
