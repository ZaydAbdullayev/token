import "./index.scss";

export const Button1 = ({ icon, text, onclick }) => {
  return (
    <button class="btn btn-3 hover-border-2" onClick={onclick}>
      <span>
        {icon} {text}
      </span>
    </button>
  );
};

export const Button6 = ({ icon, text, onclick }) => {
  return (
    <button class="btn btn-5 hover-border-11" onClick={onclick}>
      <span>
        {icon} {text}
      </span>
    </button>
  );
};
