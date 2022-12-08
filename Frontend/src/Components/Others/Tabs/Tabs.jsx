import React, {  } from "react";
import Tab from "../Tab/Tab";
import { useQuery } from "@tanstack/react-query";
import { makeRequest } from "../../../axios";
import { useLocation } from "react-router-dom";

const tabContent = [
  
  {
    title: "Lịch trình",
    content: ``,
  },
  {
    title: "Đánh giá",
    content: `Abu Dhabi is the capital and the second-most populous city of
              the United Arab Emirates (after Dubai). .`,
  },
  {
    title: "Hoạt động tham quan",
    content: `New York City (NYC), often called simply New York, is the most
              `,
  },
];

const Tabs = () => {
    const postId = parseInt(useLocation().pathname.split("/")[2]);

  const { data } = useQuery(["tour"], () =>
    makeRequest.get("/tours/findTour/" + postId).then((res) => {
      return res.data;
    })
  );
  return (
    <>
      <div className="tab tabSelected">
        <Tab active={1}>
          {tabContent?.map((tab, idx) => (
              
                <Tab.TabPane key={`Tab-${idx}`} tab={tab.title}>
                  {data?.map((tour) => (
                    tour?.description))}

              </Tab.TabPane>
          ))}
        </Tab>
      </div>
    </>
  );
};

export default Tabs;
