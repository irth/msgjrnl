import "./Conversation.css";

function Conversation({title}) {
    return <div className="Conversation">
        <div className="topbar">
            <div className="backButton">back</div>
            <div className="title">{title}</div>
            <div className="more">:</div>
        </div>
        <div className="messages">messages</div>
        <div className="input">
            <div className="stickers">s</div>
            <input></input>
            <div className="attachment">a</div>
            <div className="send">s</div>
        </div>
    </div>;
}

export default Conversation;
