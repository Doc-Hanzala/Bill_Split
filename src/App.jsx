import { useState } from "react";
import AddFriend from "./components/AddFriend";
import Friends from "./components/Friends";
import SplitForm from "./components/SplitForm";
import data from "./data";

function App() {
  const [showAddFriend, setShowAddFriend] = useState(false);
  const [friendsList, setFriendsList] = useState(data);
  const [selectedFriend, setSelectedFriend] = useState(null);

  function addFriend(friend) {
    setFriendsList([...friendsList, friend]);
    setShowAddFriend(false);
  }

  function handleSelectedFriend(friend) {
    setSelectedFriend((curFriend) =>
      curFriend?.id === friend.id ? null : friend
    );
  }

  function handleSplitBill (value){
      setFriendsList((friends) =>
        friends.map((friend) =>
          friend.id === selectedFriend.id
            ? { ...friend, balance: friend.balance + value }
            : friend
        )
      );

      setSelectedFriend(null);
  }

  return (
    <div className="app">
      <div className="bill-split">
        <Friends
          friends={friendsList}
          onHandleSelectedFriend={handleSelectedFriend}
          selectedFriend={selectedFriend}
        />
        {selectedFriend && (
          <SplitForm
            onHandleSplitBill={handleSplitBill}
            selectedFriend={selectedFriend}
          />
        )}
      </div>
      {showAddFriend && (
        <AddFriend
          onSetShowAddFriend={setShowAddFriend}
          onAddFriend={addFriend}
        />
      )}
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
