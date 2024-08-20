import React from "react";
import { useState, useEffect } from "react";
import BotCollection from "./components/BotCollection";
import YourBotArmy from "./components/YourBotArmy";
const BASEURL = "https://bot-server-eight.vercel.app/bots";
function App() {
  const [Bot, setBot] = useState([]);
  const [army, setArmy] = useState([]);
  function fetchBot() {
    fetch(BASEURL)
      .then((response) => {
        if (!response.ok) throw new Error("failed to perform fetch request");
        return response.json();
      })
      .then((data) => {
        setBot(data);
        // console.log(data)
      })
      .catch((error) => {
        console.error(error.message);
      });
  }
  useEffect(() => {
    fetchBot();
    // console.log(Bot)
    console.log(army);
  }, [army]);
  return (
    <div className="Home">
      <BotCollection Bot={Bot} setArmy={setArmy} army={army} />
      <YourBotArmy Bot={army} setArmy={setArmy} army={army} />
    </div>
  );
}

export default App;
