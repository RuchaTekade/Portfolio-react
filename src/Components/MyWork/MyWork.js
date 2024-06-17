import React, { useState } from "react";
import "./MyWork.css";
import theme_pattern from "../../Assets/theme_pattern.svg";
import mywork_data from "../../Assets/mywork_data.js";
import arrow_icon from "../../Assets/arrow_icon.svg";

const MyWork = () => {
  const [showMore, setShowMore] = useState(false);

  const handleShowMore = () => {
    setShowMore(!showMore);
  };

  // Determine the number of items to show
  const visibleWork = showMore ? mywork_data : mywork_data.slice(0, 6);

  return (
    <div id="work" className="mywork">
      <div className="mywork-title">
        <h1>My latest work</h1>
        <img src={theme_pattern} alt="Pattern" />
      </div>

      <div className="mywork-container">
        {visibleWork.map((work, index) => (
          <a
            key={index}
            href={work.w_link}
            target="_blank"
            rel="noopener noreferrer"
            className="work-item"
          >
            <img src={work.w_img} alt={work.w_name} />
            <div className="overlay">{work.w_name}</div>
          </a>
        ))}
      </div>

      {mywork_data.length > 6 && (
        <div className="mywork-showmore" onClick={handleShowMore}>
          <p>{showMore ? "Show Less" : "Show More"}</p>
          <img
            src={arrow_icon}
            alt="Arrow Icon"
            className={showMore ? "arrow-up" : "arrow-down"}
          />
        </div>
      )}
    </div>
  );
};

export default MyWork;
