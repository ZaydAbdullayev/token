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
      <nav
        className="navbar"
        data-aos="fade-up"
        data-aos-duration="700"
        data-aos-delay="3000"
        data-aos-offset="0"
      >
        <h1 className="navbar__title">
          <FlotiongText text="$QC" />
        </h1>
        {visible && (
          <div className="links">
            <Button1
              icon={<FaChartArea />}
              text="Chart"
              data-aos="fade-up"
              data-aos-duration="700"
              onclick={() =>
                window.open(
                  "https://dexscreener.com/solana/znv3FZt2HFAvzYf5LxzVyryh3mBXWuTRRng25gEZAjh",
                  "_blank"
                )
              }
            />
            <Button1
              icon={<BsTwitterX />}
              data-aos="fade-up"
              data-aos-duration="700"
              data-aos-delay="100"
              data-aos-offset="0"
            />
            <Button1
              icon={<FaTelegramPlane />}
              text="Telegram"
              data-aos="fade-up"
              data-aos-duration="700"
              data-aos-delay="200"
              data-aos-offset="0"
            />
          </div>
        )}
      </nav>
      <div className="_site-info">
        <FlippingText text="to the future of decentralized finance" />
      </div>
      <div className="footer">
        <p>© 2021 QC</p>
      </div>

      <SplittingLoader />
    </div>
  );
}

export default App;
