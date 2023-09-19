import Friend from "./Friend";

const Friends = ({ friends }) => {
  return (
    <div className="friends">
      {friends.map((friend) => {
        return <Friend key={friend.id} {...friend} />;
      })}
    </div>
  );
};

export default Friends;
