import React from "react";
import project_1 from "./MyWork.css";
import '../../Assets/project_1.png'
import theme_pattern from "../../Assets/theme_pattern.svg";
import mywork_data from "../../Assets/mywork_data.js";
import arrow_icon from "../../Assets/arrow_icon.svg";

const MyWork = () => {
  return (
    <div id='work'className="mywork">
      <div className="mywork-title">
        <h1>My latest work</h1>
        <img src={theme_pattern} alt="" />
      </div>

      <div className="mywork-container">
        {mywork_data.map((work, index) => {
          return <a key={index}  href={work.w_link} target="_blank" >
          <img  src={work.w_img} alt=""/>
          {/* <div className="caption">
            <p>{work.w_caption}</p>
          </div> */}
          </a>;
        })}

        
      </div>
      <div className="mywork-showmore">
        <p>Show More</p>
        <img src={arrow_icon} alt="" />
      </div>
    </div>
  );
};

export default MyWork;
