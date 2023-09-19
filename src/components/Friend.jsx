const Friend = ({ name, image, balance }) => {
  return (
    <div className="friend">
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

        {balance === 0 && <p className="black" >you and {name} are even</p>}
      </div>
      <button className="btn">select</button>
    </div>
  );
};

export default Friend;
