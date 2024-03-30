import { useState } from 'react';

const tabsData = [
  {
    label: 'Precios',
    content: 'Chorrillana: $9990',
  },
  {
    label: 'Comentarios',
    content: 'Tabien',
  },
];

function Tabs() {
  const [activeTabIndex, setActiveTabIndex] = useState(0);

  return (
    <div className="ml-5 text-white">
      <div className="flex gap-3 ml-4 ">
        {tabsData.map((tab, idx) => {
          return (
            <button
              key={idx}
              className={`py-2 border-b-4 transition-colors duration-300 ${
                idx === activeTabIndex
                  ? 'border-porange'
                  : 'border-transparent hover:border-porange'
              }`}
              onClick={() => setActiveTabIndex(idx)}
            >
              {tab.label}
            </button>
          );
        })}
      </div>
      <div className="py-4 ml-4">
        <p>{tabsData[activeTabIndex].content}</p>
      </div>
    </div>
  );
}

export default Tabs;
