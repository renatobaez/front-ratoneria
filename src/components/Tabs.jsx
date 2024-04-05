import { useState, useEffect } from 'react';
import axios from 'axios';

function Tabs({ localId }) {
  console.log('id desde tabs', localId);
  const [activeTabIndex, setActiveTabIndex] = useState(0);
  const [consumedData, setConsumedData] = useState();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `http://localhost:3000/api/v1/consumed/${localId}`,
        );
        setConsumedData(response.data.consumed);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [localId]);

  const tabsData = [
    {
      label: 'Precios',
      content:
        consumedData && consumedData[0]
          ? consumedData[0].price_paid
          : 'Loading...',
    },
    {
      label: 'Comentarios',
      content: 'Tabien',
    },
  ];

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
        <p>{tabsData[activeTabIndex].content || 'Loading...'}</p>
      </div>
    </div>
  );
}

export default Tabs;
