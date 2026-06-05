
import React from "react";
import './../styles/App.css';

const Tabs = ({ tabs }) => {
  const [activeIndex, setActiveIndex] = React.useState(0);
  return (
    <div>
      <ul>
        {tabs.map((tab, index) => (
          <li key={index} onClick={() => setActiveIndex(index)} style={{ cursor: "pointer", marginBottom: "5px" }}>
            {tab.title}
          </li>
        ))}
      </ul>
      <p>{tabs[activeIndex].content}</p>
    </div>
  )
}

const App = () => {
  const tabsSet1 = [
    { title: "Tab 1", content: "Content for Tab 1" },
    { title: "Tab 2", content: "Content for Tab 2" },
    { title: "Tab 3", content: "Content for Tab 3" },
  ];

  const tabsSet2 = [
    { title: "Tab A", content: "Content for Tab A" },
    { title: "Tab B", content: "Content for Tab B" },
    { title: "Tab C", content: "Content for Tab C" },
  ];

  return (
    <div style={{ padding: "20px", fontFamily: "sans-serif", fontSize: "18px" }}>
      <h3 style={{ textDecoration: "underline" }}>OUTPUT:</h3>
        <Tabs tabs={tabsSet1} />
        <br />
        <Tabs tabs={tabsSet2} />
    </div>
  )
}

export default App
