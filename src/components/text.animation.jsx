import "./index.scss";
import "splitting/dist/splitting.css";
import "splitting/dist/splitting-cells.css";

export const FlotiongText = ({ text }) => {
  return (
    <h2 data-splitting className="headline headline--float">
      {text}
    </h2>
  );
};

export const JoggingText = ({ text }) => {
  return (
    <h2 data-splitting className="headline headline--jog">
      {text}
    </h2>
  );
};

export const FlippingText = ({ text }) => {
  return (
    <h2 data-splitting className="headline headline--flip">
      {text}
    </h2>
  );
};

export const FallingText = ({ text }) => {
  return (
    <h2 data-splitting className="headline headline--fall">
      {text}
    </h2>
  );
};

export const BreezingText = ({ text }) => {
  return (
    <span data-splitting className="headline headline--breeze">
      {text}
    </span>
  );
};

import { useEffect } from "react";

export const SplittingLoader = () => {
  useEffect(() => {
    import("splitting").then((Splitting) => {
      Splitting.default();
    });
  }, []);

  return (
    <div className="loader-container">
      <div
        data-splitting="cells"
        data-columns="20"
        className="splitting cells"
      ></div>
      <h1 className="course-clear" data-splitting="chars">
        quantum cash
      </h1>
    </div>
  );
};
