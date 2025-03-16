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
import { Button1, Button6, Signal } from "./components/button.components";
import { FaTelegramPlane, FaChartArea, FaCode } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import { LuGitBranchPlus } from "react-icons/lu";

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
        <FlotiongText
          text="QUANTUM CASH"
          data-aos="fade-up"
          data-aos-anchor="#example-anchor"
          data-aos-duration="700"
          data-aos-delay="3000"
          data-aos-offset="0"
        />
        <FlippingText
          text="Earn Solana rewards every 5 minutes just by holding $QC tokens"
          data-aos="fade-up"
          data-aos-anchor="#example-anchor"
          data-aos-duration="700"
          data-aos-delay="3000"
          data-aos-offset="0"
          style={{ fontSize: "14px" }}
        />
        {visible && (
          <Button6
            text="BUY"
            data-aos="fade-up"
            data-aos-anchor="#example-anchor"
            data-aos-duration="700"
            onclick={() =>
              window.open(
                "https://phantom.com/learn/crypto-101/what-is-a-crypto-wallet",
                "_blank"
              )
            }
          />
        )}
      </div>

      <div
        className="rewards"
        data-aos="fade-up"
        data-aos-anchor="#example-anchor"
        data-aos-duration="700"
      >
        <div
          className="rewards_title"
          data-aos="fade-up"
          data-aos-anchor="#example-anchor"
          data-aos-duration="700"
          data-aos-delay="3000"
          data-aos-offset="0"
        >
          <div className="_header">
            <FlotiongText
              text="Automatic Soloana rewards"
              data-aos="fade-up"
              data-aos-anchor="#example-anchor"
              data-aos-duration="700"
              data-aos-delay="3000"
              data-aos-offset="0"
            />
            <div
              className="_title"
              data-aos="fade-up"
              data-aos-anchor="#example-anchor"
              data-aos-duration="700"
            >
              <Signal />
              <p>
                Every 5 minutes, holders receive Solana rewards automatically
                distributed to their wallets _
              </p>
            </div>
          </div>
          <div
            className="system-info"
            data-aos="fade-up"
            data-aos-anchor="#example-anchor"
            data-aos-duration="700"
          >
            <div className="_title">
              <Signal />
              <p>SYSTEM.INFO</p>
            </div>
            <p>
              The $QC token uses a revolutionary reward system that
              automatically distributes Solana to all holders every 5 minutes,
              with no need to claim.
            </p>
          </div>
        </div>

        {visible && (
          <>
            <div
              className="tree-container"
              data-aos="fade-up"
              data-aos-anchor="#example-anchor"
              data-aos-duration="700"
            >
              <div
                className="_title"
                data-aos="fade-up"
                data-aos-anchor="#example-anchor"
                data-aos-duration="700"
              >
                <Signal />
                <p>HOW.IT.WORKS</p>
              </div>

              <div
                className="box"
                data-aos="fade-up"
                data-aos-anchor="#example-anchor"
                data-aos-duration="700"
                data-aos-delay="100"
                data-aos-offset="0"
              >
                <p>5% tax is collected from every buy and sell transaction</p>
                <span className="box-bg">
                  <FaCode />
                </span>
              </div>
              <div
                className="box"
                data-aos="fade-up"
                data-aos-anchor="#example-anchor"
                data-aos-duration="700"
                data-aos-delay="200"
                data-aos-offset="0"
              >
                <p>Tax is automatically converted to Solana</p>
                <span className="box-bg">
                  <FaCode />
                </span>
              </div>
              <div
                className="box"
                data-aos="fade-up"
                data-aos-anchor="#example-anchor"
                data-aos-duration="700"
                data-aos-delay="300"
                data-aos-offset="0"
              >
                <p>
                  Smart contract distributes Solana to all holders every 5
                  minutes
                </p>
                <span className="box-bg">
                  <FaCode />
                </span>
              </div>
              <div
                className="box"
                data-aos="fade-up"
                data-aos-anchor="#example-anchor"
                data-aos-duration="700"
                data-aos-delay="400"
                data-aos-offset="0"
              >
                <p>Rewards are proportional to your token holdings</p>
                <span className="box-bg">
                  <FaCode />
                </span>
              </div>
            </div>
            <div
              className="tree-container"
              data-aos="fade-up"
              data-aos-anchor="#example-anchor"
              data-aos-duration="700"
            >
              <div className="_title">
                <Signal />
                <p>BENEFITS</p>
              </div>

              <div
                className="box"
                data-aos="fade-up"
                data-aos-anchor="#example-anchor"
                data-aos-duration="700"
                data-aos-delay="100"
                data-aos-offset="0"
              >
                <p>Earn passive income in Solana just by holding</p>
                <span className="box-bg">
                  <LuGitBranchPlus />
                </span>
              </div>
              <div
                className="box"
                data-aos="fade-up"
                data-aos-anchor="#example-anchor"
                data-aos-duration="700"
                data-aos-delay="200"
                data-aos-offset="0"
              >
                <p>No need to claim - rewards are automatic</p>
                <span className="box-bg">
                  <LuGitBranchPlus />
                </span>
              </div>
              <div
                className="box"
                data-aos="fade-up"
                data-aos-anchor="#example-anchor"
                data-aos-duration="700"
                data-aos-delay="300"
                data-aos-offset="0"
              >
                <p>Frequent 5-minute distribution cycles</p>
                <span className="box-bg">
                  <LuGitBranchPlus />
                </span>
              </div>
              <div
                className="box"
                data-aos="fade-up"
                data-aos-anchor="#example-anchor"
                data-aos-duration="700"
                data-aos-delay="400"
                data-aos-offset="0"
              >
                <p>Higher trading volume means more rewards</p>
                <span className="box-bg">
                  <LuGitBranchPlus />
                </span>
              </div>
            </div>
          </>
        )}
      </div>
      <div
        className="footer"
        data-aos="fade-up"
        data-aos-anchor="#example-anchor"
        data-aos-duration="700"
      >
        <p>© 2021 Quantum Cash | $QC token</p>
      </div>

      <SplittingLoader />
    </div>
  );
}

export default App;
