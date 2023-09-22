const Friend = ({ friend, onHandleSelectedFriend, selectedFriend }) => {
  const { image, name, balance } = friend;

  const isSelected = friend.id === selectedFriend?.id;
  return (
    <div className={`friend  ${isSelected ? "shade" : ""} `}>
      <img src={image} alt={name} />
      <div className="details">
        <h2>{name}</h2>

        {balance > 0 && (
          <p className="green">
            {name} owes you {balance}
          </p>
        )}

        {balance < 0 && (
          <p className="red">
            you owe {name} {Math.abs(balance)}
          </p>
        )}

        {balance === 0 && <p className="black">you and {name} are even</p>}
      </div>
      <button onClick={() => onHandleSelectedFriend(friend)} className="btn">
        {isSelected ? "close" : "select"}
      </button>
    </div>
  );
};

export default Friend;
