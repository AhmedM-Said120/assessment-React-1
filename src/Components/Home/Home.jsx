import React from "react";
import img from "../../assests/imgs/avataaars.svg";
import StarLine from "../StarAndLine/StarLine";
import style from "./Home.module.css";

export default function Home() {
  return (
    <section className={style.bgHome}>
      <div className={" container d-flex textContent justify-content-center"}>
        <div>
          <div className="imgIntro mb-5 ">
            <img
              src={img}
              style={{
                width: "20rem",
                position: "relative",
                left: "3rem",
                marginTop: "4rem",
              }}
              alt="boyImg"
            />
          </div>
          <div className='' style={{marginBottom:'7rem'}} >
            <div className={`${style.headerText} `}>
              <h2 className="text-uppercase mb-3 fs-1 fw-bolder">
                START FRAMEWORK
              </h2>
            </div>
            <div className={`lineAndStar ${style.line}`} style={{}}>

            <StarLine />

            </div>
            <div className="footText ">
              <p>Graphic Artist - Web Designer - Illustrator</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
