import React from "react";
import { useState } from "react";

function Tab() {
  const [index, setIndex] = useState(0);
  return (
    <div className="Tab">
      <div className="tablist">
        <div
          className="tabHeader"
          onClick={() => {
            setIndex(0);
          }}
        >
          tab1
        </div>
        <div
          className="tabHeader"
          onClick={() => {
            setIndex(1);
          }}
        >
          tab2
        </div>
        <div
          className="tabHeader"
          onClick={() => {
            setIndex(2);
          }}
        >
          tab3
        </div>
      </div>
      <div className="tabcontent" hidden={index !== 0}></div>
      <div className="tabcontent" hidden={index !== 1}>
        noi dung 2
      </div>
      <div className="tabcontent" hidden={index !== 2}>
        noi dung 3
      </div>
    </div>
  );
}

export default Tab;
