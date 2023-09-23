import { useState } from "react";

const SplitForm = ({ selectedFriend, onHandleSplitBill }) => {
  const [bill, setBill] = useState("");
  const [paidByUser, setPaidByUser] = useState("");
  const [whoIsPaying, setWhoIsPaying] = useState("you");
  const friendBill = bill - paidByUser;

  function handleSubmit(e) {
    e.preventDefault();

    if (!bill || !paidByUser) return;
    onHandleSplitBill(whoIsPaying === "user" ? paidByFriend : -paidByUser);
  }

  return (
    <form onSubmit={handleSubmit} className="split-form">
      <h2>split a bill with {selectedFriend.name}</h2>
      <div className="input">
        <label htmlFor="value">bill value</label>
        <input
          value={bill}
          onChange={(e) => setBill(Number(e.target.value))}
          type="text"
          id="value"
        />
      </div>
      <div className="input">
        <label htmlFor="expense">your expense</label>
        <input
          value={paidByUser}
          onChange={(e) =>
            setPaidByUser(
              Number(e.target.value) > bill ? setPaidByUser : e.target.value
            )
          }
          type="text"
          id="expense"
        />
      </div>
      <div className="input">
        <label htmlFor="friend">{selectedFriend.name}'s bill</label>
        <input value={friendBill} disabled type="text" id="friend" />
      </div>
      <div className="input">
        <label htmlFor="pay">who is paying the bill</label>
        <select
          value={whoIsPaying}
          onChange={(e) => setWhoIsPaying(e.target.value)}
          id="pay"
        >
          <option value="you">you</option>
          <option value="friend">{selectedFriend.name}</option>
        </select>
      </div>

      <button className="btn  split-btn">split bill</button>
    </form>
  );
};

export default SplitForm;
