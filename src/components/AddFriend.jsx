import { useState } from "react";

const AddFriend = ({ onAddFriend, onSetShowAddFriend }) => {
  const [name, setName] = useState("");
  const [imgUrl, setImgUrl] = useState("https://i.pravatar.cc/48");

  function handleSubmit(e) {
    e.preventDefault();
    const id = crypto.randomUUID();

    const newFriend = {
      name,
      id,
      image: `${imgUrl}?=${id}`,
      balance: 0,
    };

    onAddFriend(newFriend);
  }

  return (
    <form onSubmit={handleSubmit} className="add-friend-form">
      <div className="input">
        <label htmlFor="addFriend">friend name</label>
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          type="text"
          id="addFriend"
        />
      </div>
      <div className="input">
        <label htmlFor="image">image url</label>
        <input
          value={imgUrl}
          onChange={(e) => setImgUrl(e.target.value)}
          type="text"
          id="image"
        />
      </div>
      <div className="btn-container">
        <button className="btn  ">add</button>
        <button onClick={() => onSetShowAddFriend(false)} className="btn">
          close
        </button>
      </div>
    </form>
  );
};

export default AddFriend;
