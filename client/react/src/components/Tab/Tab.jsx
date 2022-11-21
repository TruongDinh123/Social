import React, { useEffect } from "react";
import { useState } from "react";
import "../../components/Tab/Tab.scss";
const Tab = ({ children, active = 0 }) => {
  const [activeTab, setActiveTab] = useState(active);
  const [tabsData, setTabsData] = useState([]);

  
  useEffect(() => {
    let data = [];

    React.Children.forEach(children, (Element) => {
      if (!React.isValidElement(Element)) return;

      const {
        props: { tab, children },
      } = Element;
      data.push({ tab, children });
    });

    setTabsData(data);
  }, [children]);

  return (
    <>
      <div className="wrapper">
        <div className="tabs">
          {tabsData?.map(({ tab }, idx) => (
            <li className="tab-title">
              <a
                className={`nav-link ${idx === activeTab ? "active" : ""}`}
                href="#"
                onClick={() => setActiveTab(idx)}
              >
                {tab}
              </a>
            </li>
          ))}
        </div>
        <div className="tab-content">
          {tabsData[activeTab] && tabsData[activeTab].children}
        </div>
      </div>
    </>
  );
};

const TabPane = ({ children }) => {
  return { children };
};

Tab.TabPane = TabPane;
export default Tab;
