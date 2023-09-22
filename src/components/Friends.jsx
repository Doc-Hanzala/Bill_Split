import Friend from "./Friend";

const Friends = ({ friends, onHandleSelectedFriend, selectedFriend }) => {
  return (
    <div className="friends">
      {friends.map((friend) => {
        return (
          <Friend
            selectedFriend={selectedFriend}
            onHandleSelectedFriend={onHandleSelectedFriend}
            key={friend.id}
            friend={friend}
          />
        );
      })}
    </div>
  );
};

export default Friends;
