import React from 'react';

import './About.css';

const About = () => (
  <div className="aboutTop">
    <div className="whitespace" />
    <div className="goal">
      Thank you for visiting our application!  We at Notorious NPM developed Rhyme Doctor
      as a tool to help people, amateur and professional alike, to create sick rhymes and
      be able to share it with the world.  Simply type or paste your lyrics, click {'"Hit API"'},
      and see the wonderful rhyme structure display before you.
    </div>
    <div className="whitespace" />
    <div className="challenges">
      Technical challenges/achievements
      <br />
      We are proud to say that nothing like this has been realized before, and especially not to the
      extent where people can visualize the rhyme schemes of their lyrics.  Our experienced staff
      here at Notorious NPM spent countless hours to deliver the elaborate architecture and
      algorithms of Rhyme Doctor that delivers rhyme visualization at breakneck speeds.  We hope you
      enjoy it!
    </div>
    <div className="whitespace" />
    Meet the staff of Notorious NPM
    <div className="contributors top">
      <div className="contributors container">
        <div className="contributor">
          <img src="https://thumbs.dreamstime.com/t/super-cool-potato-character-cartoon-style-vector-illustration-95541644.jpg" alt="potato"/>
          <br />
          Senior Software Engineer
          <br />
          Eva Laskowski
        </div>
        <div className="contributor">
          <img src="https://thumbs.dreamstime.com/t/super-cool-potato-character-cartoon-style-vector-illustration-95541644.jpg" alt="potato"/>
          <br />
          Senior Software Engineer
          <br />
          James Yen
        </div>
        <div className="contributor">
          <img src="https://thumbs.dreamstime.com/t/super-cool-potato-character-cartoon-style-vector-illustration-95541644.jpg" alt="potato"/>
          <br />
          Senior Software Engineer
          <br />
          Kin Chan
        </div>
        <div className="contributor">
          <img src="https://thumbs.dreamstime.com/t/super-cool-potato-character-cartoon-style-vector-illustration-95541644.jpg" alt="potato"/>
          <br />
          Senior Software Engineer
          <br />
          Samuel Hong
        </div>
      </div>
    </div>
    <br />
    <div className="tech">
      <h4>Tech Stack</h4>
      <br />
      <div className="images">
        <div className="image react">
          <img src="https://i.imgur.com/kEmE4cF.png" alt="react" />
        </div>
        <div className="image">
          <img src="https://cdn.worldvectorlogo.com/logos/passport.svg" alt="passport" />
        </div>
        <div className="image">
          <img src="https://cdn.worldvectorlogo.com/logos/mysql-5.svg" alt="mySql" />
        </div>
        <div className="image router">
          <img src="https://cdn.worldvectorlogo.com/logos/react-router.svg" alt="reactRouter" />
        </div>
        <div className="image">
          <img src="https://cdn.worldvectorlogo.com/logos/socket-io.svg" alt="socket" />
        </div>
        <div className="image">
          <img src="https://cdn.worldvectorlogo.com/logos/nodejs-icon.svg" alt="node" />
        </div>
      </div>
    </div>
    <div>
      Made at Hack Reactor
    </div>
  </div>
);

export default About;
