import React from 'react';

import './About.css';

const About = () => (
  <div className="aboutTop">
    <div className="whitespace" />
    <div className="goal">
      Welcome, and thank you for visiting our application! We at Notorious NPM developed Rhyme
      Doctor as a tool to assist people, amateur and professional alike, to create the sickest
      lyrics and be able to share it with the world. Simply type or paste your lyrics,
      click {'"Hit API"'}, and see the wonderful rhyme structure display before you.
    </div>
    <div className="whitespace" />
    <div className="challenges">
      <h6>Technical challenges/achievements</h6>
      We are proud to say that nothing like this has been realized before, especially not to the
      extent where people can visualize the rhyme schemes of their lyrics. Our experienced staff
      here at Notorious NPM spent countless hours to deliver the elaborate architecture and
      algorithm of Rhyme Doctor that delivers rhythmic visualization at breakneck speeds.
      We hope that this tool will be of use to you and that you will enjoy your visit here!
    </div>
    <div className="whitespace" />
    Meet the staff of Notorious NPM
    <div className="contributors top">
      <div className="contributors container">
        <div className="contributor">
          <img src="https://rhymedoctor.fun/elaskowski.jpeg" height="160" width="160" alt="potato" />
          <br />
          Senior Software Engineer
          <br />
          Eva Laskowski
        </div>
        <div className="contributor">
          <img src="https://rhymedoctor.fun/jameshyen.jpeg" height="160" width="160" alt="potato" />
          <br />
          Senior Software Engineer
          <br />
          James Yen
        </div>
        <div className="contributor">
          <img src="https://rhymedoctor.fun/kkchan.png" height="160" width="160" alt="potato" />
          <br />
          Senior Software Engineer
          <br />
          Kin Chan
        </div>
        <div className="contributor">
          <img src="https://rhymedoctor.fun/shong.jpeg" height="160" width="160" alt="potato" />
          <br />
          Senior Software Engineer
          <br />
          Samuel Hong
        </div>
      </div>
    </div>
    <div className="whitespace" />
    <div className="tech">
      <h4 style={{ margin: '5px' }}>Powered By</h4>
      <div className="images">
        <div className="image">
          <img src="https://cdn.worldvectorlogo.com/logos/react.svg" alt="react" />
        </div>
        <div className="image">
          <img src="https://cdn.worldvectorlogo.com/logos/redux.svg" alt="redux" />
        </div>
        <div className="image router">
          <img src="https://cdn.worldvectorlogo.com/logos/react-router.svg" alt="reactRouter" />
        </div>
        <div className="image">
          <img src="https://cdn.worldvectorlogo.com/logos/nodejs-icon.svg" alt="node" />
        </div>
        <div className="image">
          <img src="https://cdn.worldvectorlogo.com/logos/mysql-5.svg" alt="mySql" />
        </div>
        <div className="image">
          <img src="https://cdn.worldvectorlogo.com/logos/sequelize.svg" alt="sequelize" />
        </div>
        <div className="image wordsAPI">
          <p>WORDSAPI</p>
        </div>
        <div className="image">
          <img src="https://cdn.worldvectorlogo.com/logos/socket-io.svg" alt="socket" />
        </div>
        <div className="image">
          <img src="https://cdn.worldvectorlogo.com/logos/passport.svg" alt="passport" />
        </div>
        <div className="image">
          <img src="https://cdn.worldvectorlogo.com/logos/dropzone.svg" alt="dropzone" />
        </div>
        <div className="image cloudinary">
          <img src="https://res.cloudinary.com/demo/image/upload/e_shadow,x_13,y_13/cloudinary_icon.png" alt="cloudinary" />
        </div>
        <div className="image babel">
          <img src="https://cdn.worldvectorlogo.com/logos/babel-10.svg" alt="babel" />
        </div>
        <div className="image">
          <img src="https://cdn.worldvectorlogo.com/logos/aws-ec2.svg" alt="aws" />
        </div>
        <div className="image">
          <img src="https://cdn.worldvectorlogo.com/logos/webpack-icon.svg" alt="webpack" />
        </div>
      </div>
    </div>
    <div>
      Made at <img className="hackreactor" src="https://pbs.twimg.com/profile_images/793537459451596800/k6pD59ev_400x400.jpg" alt="hackreactor" />
    </div>
  </div>
);

export default About;
