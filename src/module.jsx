import { useState, useEffect, useRef } from "react";
import Splitting from "splitting";
import "./module.scss";

const numberWithComma = (number) => {
  if (!number) return "0";
  return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};

const randomRange = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const ModuleS = () => {
  const [displayNum, setDisplayNum] = useState("0");
  const actualNum = randomRange(10000, 80000000);
  const animationFrameId = useRef(null); // requestAnimationFrame ID

  useEffect(() => {
    let progress = 0;
    const msPerStep = (actualNum / 60) * 0.8;

    const step = async () => {
      progress = Math.min(progress + msPerStep, actualNum);
      setDisplayNum(numberWithComma(Math.round(progress)));

      if (progress < actualNum) {
        animationFrameId.current = requestAnimationFrame(step);
      } else {
        cancelAnimationFrame(animationFrameId.current); // Animasyonu durdur
        await delay(500);
        Splitting();
      }
    };

    animationFrameId.current = requestAnimationFrame(step);

    return () => cancelAnimationFrame(animationFrameId.current); // Cleanup
  }, []);

  return (
    <div id="app">
      <div className="number" data-splitting="chars">
        {displayNum}
      </div>
      <div className="deco-dot dot-1"></div>
      <div className="deco-dot dot-2"></div>
      <div className="deco-dot dot-3"></div>
    </div>
  );
};

export default ModuleS;
