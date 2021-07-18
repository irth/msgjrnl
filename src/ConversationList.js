import "./ConversationList.css";

const initial = (s) => s[0]; // TODO: something better

function ConversationButton({ name, message }) {
  return (
    <div className="ConversationButton">
      <div className="icon">
        <div>{initial(name)}</div>
      </div>
      <div>
        <div className="name">{name}</div>
        <div className="message">{message}</div>
      </div>
    </div>
  );
}

function ConversationList() {
  return (
    <ul className="ConversationList">
      <li>
        <ConversationButton name="Conversation1" message="This is last messg" />
      </li>
      <li>
        <ConversationButton name="Conversation2" message="This is last messg" />
      </li>
      <li>
        <ConversationButton name="Conversation3" message="This is last messg" />
      </li>
    </ul>
  );
}

export default ConversationList;
