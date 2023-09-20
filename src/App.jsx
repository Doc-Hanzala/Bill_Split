import { useState } from "react";
import AddFriend from "./components/AddFriend";
import Friends from "./components/Friends";
import SplitForm from "./components/SplitForm";
import data from "./data";

function App() {
  const [showAddFriend, setShowAddFriend] = useState(false);
  return (
    <div className="app">
      <div className="bill-split">
        <Friends friends={data} />
        <SplitForm />
      </div>
      {showAddFriend && <AddFriend />}
      <button
        onClick={() => setShowAddFriend(!showAddFriend)}
        className="btn add-friend-btn"
      >
        {showAddFriend ? "close" : "add friend"}
      </button>
    </div>
  );
}

export default App;
