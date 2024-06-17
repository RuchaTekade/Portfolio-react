import React from "react";
import "./About.css";
import theme_pattern from "../../Assets/theme_pattern.svg";
import profile_img from "../../Assets/about_profile.png";

const About = () => {
  return (
    <div id="about" className="about">
      <div className="about-title">
        <h1>About me</h1>
        <img src={theme_pattern} alt="" />
      </div>
      <div className="about-sections">
        <div className="about-left">
          <img src={profile_img} alt="" />
        </div>
        <div className="about-right">
          <div className="about-para">
            <p>
              𝗜 𝗮𝗺 𝗗𝗲𝗱𝗶𝗰𝗮𝘁𝗲𝗱 𝗗𝗶𝗽𝗹𝗼𝗺𝗮 𝗛𝗼𝗹𝗱𝗲𝗿 𝗶𝗻 𝗖𝗼𝗺𝗽𝘂𝘁𝗲𝗿 𝗘𝗻𝗴𝗶𝗻𝗲𝗲𝗿𝗶𝗻𝗴 𝗮𝗻𝗱 𝗰𝘂𝗿𝗿𝗲𝗻𝘁
              𝗖𝗦𝗘 𝗦𝘁𝘂𝗱𝗲𝗻𝘁 𝗮𝘁 𝗕𝗘, 𝘀𝗽𝗲𝗰𝗶𝗮𝗹𝗶𝘇𝗶𝗻𝗴 𝗶𝗻 𝘄𝗲𝗯 𝗱𝗲𝘃𝗲𝗹𝗼𝗽𝗺𝗲𝗻𝘁.𝗪𝗶𝘁𝗵 𝗲𝘅𝗽𝗲𝗿𝗶𝗲𝗻𝗰𝗲
              𝗮𝘀 𝗮 𝗪𝗲𝗯 𝗗𝗲𝘃𝗲𝗹𝗼𝗽𝗲𝗿 𝗮𝗻𝗱 𝗳𝗼𝗿𝗺𝗲𝗿 𝗶𝗻𝘁𝗲𝗿𝗻 𝗮𝘁 𝗕𝗵𝗮𝗿𝗮𝘁 𝗜𝗻𝘁𝗲𝗿𝗻, 𝗜 𝗯𝗿𝗶𝗻𝗴 𝗮
              𝗽𝗿𝗼𝘃𝗲𝗻 𝘁𝗿𝗮𝗰𝗸 𝗿𝗲𝗰𝗼𝗿𝗱 𝗼𝗳 𝗱𝗲𝗹𝗶𝘃𝗲𝗿𝗶𝗻𝗴 𝗵𝗶𝗴𝗵-𝗾𝘂𝗮𝗹𝗶𝘁𝘆 𝗽𝗿𝗼𝗷𝗲𝗰𝘁𝘀.
            </p>
            <p>
              𝗣𝗿𝗼𝗳𝗶𝗰𝗶𝗲𝗻𝘁 𝗶𝗻 𝗯𝗼𝘁𝗵 𝗳𝗿𝗼𝗻𝘁-𝗲𝗻𝗱 𝗮𝗻𝗱 𝗯𝗮𝗰𝗸-𝗲𝗻𝗱 𝘁𝗲𝗰𝗵𝗻𝗼𝗹𝗼𝗴𝗶𝗲𝘀, 𝗜 𝗮𝗺
              𝗰𝗼𝗺𝗺𝗶𝘁𝘁𝗲𝗱 𝘁𝗼 𝗰𝗼𝗻𝘁𝗶𝗻𝘂𝗼𝘂𝘀 𝗹𝗲𝗮𝗿𝗻𝗶𝗻𝗴 𝘁𝗼 𝘀𝘁𝗮𝘆 𝗮𝘁 𝘁𝗵𝗲 𝗳𝗼𝗿𝗲𝗳𝗿𝗼𝗻𝘁 𝗼𝗳 𝘁𝗵𝗲
              𝗶𝗻𝗱𝘂𝘀𝘁𝗿𝘆. 𝗘𝗮𝗴𝗲𝗿 𝘁𝗼 𝗹𝗲𝘃𝗲𝗿𝗮𝗴𝗲 𝗺𝘆 𝘀𝗸𝗶𝗹𝗹𝘀 𝗮𝗻𝗱 𝗰𝗼𝗻𝘁𝗿𝗶𝗯𝘂𝘁𝗲 𝗲𝗳𝗳𝗲𝗰𝘁𝗶𝘃𝗲𝗹𝘆
              𝘁𝗼 𝗶𝗻𝗻𝗼𝘃𝗮𝘁𝗶𝘃𝗲 𝗽𝗿𝗼𝗷𝗲𝗰𝘁𝘀 𝗮𝗻𝗱 𝗰𝗼𝗹𝗹𝗮𝗯𝗼𝗿𝗮𝘁𝗶𝘃𝗲 𝘁𝗲𝗮𝗺𝘀.
            </p>
          </div>
          <div className="about-skills">
            <div className="about-skill">
              {" "}
              <p>HTML & CSS</p>
              <hr style={{ width: "50%" }} />
            </div>
            <div className="about-skill">
              {" "}
              <p>Rect JS</p>
              <hr style={{ width: "70%" }} />
            </div>
            <div className="about-skill">
              {" "}
              <p>Javascript</p>
              <hr style={{ width: "60%" }} />
            </div>
            <div className="about-skill">
              {" "}
              <p>Next JS</p>
              <hr style={{ width: "50%" }} />
            </div>
          </div>
        </div>
      </div>
      <div className="about-achievements">
        <div className="about-achievement">
          <h1>10+</h1>
          <p>YEARS OF EXPERIENCE</p>
        </div>
        <hr />
        <div className="about-achievement">
          <h1>90+</h1>
          <p>PROJECTS COMPLETED</p>
        </div>
        <hr />
        <div className="about-achievement">
          <h1>15+</h1>
          <p>HAPPY CLIENTS</p>
        </div>
      </div>
    </div>
  );
};

export default About;
