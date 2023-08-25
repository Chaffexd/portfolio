import FrontEndSkills from "./FrontEndSkills";
import TestSkills from "./TestSkills";
import classes from "./aboutintro.module.css";

const AboutIntro = () => {
  return (
    <div className={classes.info}>
      <h1 className={classes.title}>Introduction</h1>
      <h2 className={classes.name}>Hello, I'm Shane Chaffe.</h2>
      <p className={classes.paraOne}>
        I'm currently a Customer Support Engineer at Contentful. I have
        previously worked at Sauce Labs, OneTrust, and Apple. My career thus far
        has been based in Support, I hope by now it's safe to say I can
        troubleshoot issues.
      </p>
      <p className={classes.paraTwo}>
        Moving forward, I'm looking to move into Front End Development and
        become a Software Engineer. I enjoy creating beautiful UI's and
        recreating wonderful designs as well getting curious with new technologies.
      </p>
      <div className={classes.skillTitle}>
        <p>Here is what I enjoy working with when it comes to Front End:</p>
        <div className={classes.skills}>
          <FrontEndSkills />
        </div>
        <div>
          <p className={classes.testTitle}>This is where I go for testing:</p>
          <div className={classes.skills}>
            <TestSkills />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutIntro;
