import logo from "./logo.svg";
import "./App.css";

import ConversationList from "./ConversationList";

import { useState } from "react";

function App() {
  const [route, setRoute] = useState({
    name: "list",
  });
  return (
    <div className="App">
      {route.name === "list" ? <ConversationList /> : false}
      {route.name === "conversation" ? (
        <div className="Conversation"></div>
      ) : (
        false
      )}
    </div>
  );
}

export default App;
