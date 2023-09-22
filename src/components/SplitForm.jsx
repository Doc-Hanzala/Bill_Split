const SplitForm = ({ selectedFriend }) => {
  return (
    <form className="split-form">
      <h2>split a bill with {selectedFriend.name}</h2>
      <div className="input">
        <label htmlFor="value">bill value</label>
        <input type="text" id="value" />
      </div>
      <div className="input">
        <label htmlFor="expense">your expense</label>
        <input type="text" id="expense" />
      </div>
      <div className="input">
        <label htmlFor="friend">{selectedFriend.name}'s bill</label>
        <input disabled type="text" id="friend" />
      </div>
      <div className="input">
        <label htmlFor="pay">who is paying the bill</label>
        <select id="pay">
          <option value="you">you</option>
          <option value="friend">{selectedFriend.name}</option>
        </select>
      </div>

      <button className="btn  split-btn">split bill</button>
    </form>
  );
};

export default SplitForm;
