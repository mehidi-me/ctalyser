import React from "react";

function SectionItem({ AnimImages, title, description,imagePositon }) {
  return (
    <div className="grid-2 align-center">
      {imagePositon == "left" ? <AnimImages /> : null}

      <div className="content an1" style={{ visibility: "visible" }}>
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
      {imagePositon != "left" ? <AnimImages /> : null}
    </div>
  );
}

export default SectionItem;
