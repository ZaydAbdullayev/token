import React, { useEffect, useState } from "react";
import "./app.css";
import Splitting from "splitting";
import "splitting/dist/splitting.css";
import "splitting/dist/splitting-cells.css";
import {
  FlotiongText,
  FallingText,
  FlippingText,
  JoggingText,
  SplittingLoader,
} from "./components/text.animation";
import { Button1, Button6 } from "./components/button.components";
import { FaTelegramPlane, FaChartArea } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";

function App() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    Splitting();

    // have to wait 3s before making the text visible
    setTimeout(() => {
      setVisible(true);
    }, 5000);
  }, []);

  return (
    <div className="wrapper">
      {visible && (
        <nav
          className="navbar"
          data-aos="fade-up"
          data-aos-easing="linear"
          data-aos-duration="1000"
        >
          <h1 className="navbar__title">$QC</h1>
          <div className="links">
            <Button1 icon={<FaChartArea />} text="Chart" />
            <Button1 icon={<BsTwitterX />} />
            <Button1 icon={<FaTelegramPlane />} text="Telegram" />
          </div>
        </nav>
      )}
      <SplittingLoader />
    </div>
  );
}

export default App;
