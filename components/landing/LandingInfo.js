import GithubIcon from "../icons/GithubIcon";
import LinkedInIcon from "../icons/LinkedInIcon";
import Typewriter from "typewriter-effect";

import classes from "./landinginfo.module.css";

const LandingInfo = () => {
  return (
    <div>
      <h1 className={classes.title}>
        <p>Hello, I'm <span className={classes.name}>Shane</span> 👋🏻 🇬🇧</p>
        <div>
          <Typewriter 
              options={{
                strings: ["Technical Support Engineer", "Software Engineer","Front End Engineer"],
                autoStart: true,
                loop: true
              }}
          />
        </div>
      </h1>
      <div className={classes.socials}>
        <a href="https://github.com/Chaffexd" target="_blank">
          <GithubIcon />
        </a>
        <a href="https://www.linkedin.com/in/shane-chaffe/" target="_blank">
          <LinkedInIcon />
        </a>
      </div>
    </div>
  );
};

export default LandingInfo;
