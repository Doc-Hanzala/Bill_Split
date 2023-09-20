const AddFriend = () => {
  return (
    <form className="add-friend-form">
      <div className="input">
        <label htmlFor="addFriend">friend name</label>
        <input type="text" id="addFriend" />
      </div>
      <div className="input">
        <label htmlFor="image">image url</label>
        <input type="text" id="image" />
      </div>
      <div className="btn-container">
        <button className="btn  ">add</button>
        <button className="btn">close</button>
      </div>
    </form>
  );
};

export default AddFriend;
