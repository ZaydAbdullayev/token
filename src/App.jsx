import { useEffect } from "react";
import "./App.css";
import "./main.scss";
import "splitting/dist/splitting.css";
import "splitting/dist/splitting-cells.css";
import Splitting from "splitting";

function App() {
  useEffect(() => {
    Splitting();
  }, []);

  return (
    <>
      <span data-splitting="chars">Variable Fonts!</span>
      {/* <ul>
        <li>
          <article data-splitting>
            <p>
              Wow, Splitting.js is pretty cool...
              <br />
              and surprising easy to use.
            </p>
          </article>
        </li>
        <li>
          <h1 data-splitting>ScrollOut + Splitting.js</h1>
        </li>
      </ul> */}
      {/* <h1 data-splitting>Split by chars (default)</h1>
      <p data-splitting="words">Split by words</p>
      <ul data-splitting="items">
        <li>Split</li>
        <li>by</li>
        <li>children!</li>
      </ul> */}
      {/* <main className="container">
        <h2 data-splitting className="headline headline--jump">
          jumping
        </h2>
        <h2 data-splitting className="headline headline--float">
          floating
        </h2>
        <h2 data-splitting className="headline headline--jog">
          jogging
        </h2>
        <h2 data-splitting className="headline headline--flip">
          flipping
        </h2>
        <h2 data-splitting className="headline headline--twirl">
          twirling
        </h2>
        <h2 data-splitting className="headline headline--fall">
          falling
        </h2>
      </main> */}
    </>
  );
}

export default App;
