import { FunctionComponent } from "react";
import "./Frame.css";

const Frame: FunctionComponent = () => {
  return (
    <div className="div">
      <img className="background-icon" alt="" src="/background.svg" />
      <img className="scroll-icon" alt="" src="/scroll.svg" />
      <div className="menu">
        <b className="overview">Overview</b>
        <b className="overview">Features</b>
        <b className="overview">Pricing</b>
        <b className="overview">About</b>
      </div>
      <div className="content">
        <b className="discipline-will-take-container">
          <p className="discipline-will">{`Discipline will `}</p>
          <p className="discipline-will">{`take you places `}</p>
          <p className="discipline-will">motivation can't</p>
        </b>
        <b className="design-smarter-not">DESIGN SMARTER, NOT HARDER</b>
        <div className="amet-minim-mollit-container">
          <p className="discipline-will">{`Amet minim mollit non deserunt ullamco est sit aliqua dolor `}</p>
          <p className="discipline-will">{`do amet sint. Velit officia consequat duis enim velit mollit. `}</p>
          <p className="discipline-will">
            Exercitation veniam consequat sunt nostrud amet.
          </p>
        </div>
        <div className="main-cta">
          <b className="schedule-a-demo">Schedule a Demo</b>
        </div>
        <div className="secondary-button">
          <b className="schedule-a-demo">Contact Sales</b>
        </div>
      </div>
      <img className="logo-icon" alt="" src="/logo.svg" />
      <div className="sign-in">
        <b className="schedule-a-demo">Sign In</b>
      </div>
      <div className="browser">
        <div className="group-parent">
          <div className="group-parent">
            <img className="screen-icon" alt="" src="/screen.svg" />
            <img className="screen-icon1" alt="" src="/screen1.svg" />
            <img className="screen-icon2" alt="" src="/screen2.svg" />
            <div className="rectangle-parent">
              <div className="group-child" />
              <img className="vector-icon" alt="" src="/vector.svg" />
              <div className="vector-parent">
                <img className="vector-icon1" alt="" src="/vector1.svg" />
                <div className="appyourappio">app.yourapp.io</div>
              </div>
              <div className="group-item" />
              <div className="group-inner" />
              <div className="ellipse-div" />
              <img className="group-child1" alt="" src="/vector-137.svg" />
              <img className="group-child2" alt="" src="/vector-138.svg" />
              <div className="rectangle-div" />
              <img className="group-child3" alt="" src="/vector-136.svg" />
              <img className="vector-icon2" alt="" src="/vector2.svg" />
              <img className="vector-icon3" alt="" src="/vector3.svg" />
              <img className="vector-icon4" alt="" src="/vector4.svg" />
              <img className="vector-icon5" alt="" src="/vector5.svg" />
            </div>
            <img className="group-child4" alt="" src="/vector-134.svg" />
            <img className="group-child5" alt="" src="/vector-135.svg" />
          </div>
          <img className="group-child6" alt="" src="/vector-139.svg" />
        </div>
        <img className="artwork-icon" alt="" src="/artwork@2x.png" />
      </div>
    </div>
  );
};

export default Frame;
