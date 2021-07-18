import logo from "./logo.svg";
import "./App.css";

import ConversationList from "./ConversationList";

import {useState} from "react";
import Conversation from "./Conversation";

function App() {
    const [route, setRoute] = useState({
        name: "conversation",
    });
    return (
        <div className="App">
            {route.name === "list" ? <ConversationList /> : false}
            {route.name === "conversation" ? (
                <Conversation title="test conversation" />
            ) : (
                    false
                )}
        </div>
    );
}

export default App;
