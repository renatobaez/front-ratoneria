import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useCardContext } from '../context/CardContext.jsx';
import Chat from '../components/Chat.jsx';
import SocialLinks from '../components/ui/Rrss.jsx';
import Tabs from '../components/Tabs.jsx';

function Local() {
  const { cards } = useCardContext();
  const { id } = useParams();
  const [local, setLocal] = useState(() => {
    const storedLocal = localStorage.getItem('local');
    return storedLocal ? JSON.parse(storedLocal) : null;
  });

  useEffect(() => {
    const foundLocal = cards.find(
      (card) => card.id.toString() === id.toString(),
    );
    setLocal(foundLocal);
    localStorage.setItem('local', JSON.stringify(foundLocal));
  }, [id, cards]);

  if (!local) {
    return <div>Loading...</div>;
  }

  return (
    <div className="lg:w-[1280px] w-full  mx-auto relative mb-10 mt-10">
      <div className="bg-pdark-grey w-5/6 inline-block w-full h-full align-top  mx-auto px-10 py-10 ">
        <h1 className="text-3xl sm:text-2xl font-bold mb-4 mt-2 text-center text-slate-100">
          {local.title}
        </h1>
      </div>
      <div className="flex flex-row justify-evenly  mt-10">
        <div className="w-[50%] flex flex-col  items-center ">
          <img
            className="mx-auto  rounded-md"
            src={local.img}
            width={500}
            alt=""
          />
          <div className="mt-10  w-[90%] ">
            <Tabs />
          </div>
        </div>
        <div className="flex flex-col w-[600px] ">
          <div
            className=" bg-pdark-grey h-[600px] p-1 rounded-md  w-full flex flex-col"
            id="chat"
          >
            <Chat local={local.id.toString()} />
          </div>
          <div className=" w-[400px] mt-10 bg-pdark-grey p-10  rounded-md mx-auto border text-center">
            <Link to="/">
              <h1 className="text-slate-100">URL DEL LOCAL</h1>
            </Link>
          </div>
          <div className="mt-5 text-lg mx-auto   ">
            <SocialLinks urlig="#" urltw="#" urlfb="#" urlyou="#" size="25px" />
          </div>
        </div>
      </div>
      <div className="flex flex-row"></div>
    </div>
  );
}

export default Local;
