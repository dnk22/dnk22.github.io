import React, { useEffect, useState } from "react";
import "./Splash.css";
import { Redirect } from "react-router-dom";
import LoaderLogo from "../../components/Loader/LoaderLogo.js";

function AnimatedSplash(props) {
  return (
    <div className="logo_wrapper">
      <div className="screen" style={{ backgroundColor: props.theme.text }}>
        <LoaderLogo id="logo" theme={props.theme} />
      </div>
    </div>
  );
}

const Splash = ({ theme }) => {
  const [redirect, setRedirect] = useState(false);

  useEffect(() => {
    let timeOut = setTimeout(() => setRedirect({ redirect: true }), 3500);
    setTextAnimation(0.1, 3.4, 2, 'linear', '#ffffff', false);
    return () => {
      clearTimeout(timeOut)
    }
  }, []);
  const setTextAnimation = (delay, duration, strokeWidth, timingFunction, strokeColor, repeat) => {
    const paths = document.querySelectorAll("path");
    const mode = repeat ? 'infinite' : 'forwards'
    for (let i = 0; i < paths.length; i++) {
      const path = paths[i];
      const length = path.getTotalLength();
      path.style["stroke-dashoffset"] = `${length}px`;
      path.style["stroke-dasharray"] = `${length}px`;
      path.style["stroke-width"] = `${strokeWidth}px`;
      path.style["stroke"] = `${strokeColor}`;
      path.style["animation"] = `${duration}s svg-text-anim ${mode} ${timingFunction}`;
      path.style["animation-delay"] = `${i * delay}s`;
    }
  }

  return (
    <React.Fragment>
      {redirect ? (<Redirect to="/home" />) : <AnimatedSplash theme={theme} />}
    </React.Fragment>
  )
}

export default Splash;
