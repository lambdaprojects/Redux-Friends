import React from "react";

function ShowFriends(props) {
  return (
    <div className="contacts">
      {props.friends.map(friend => (
        <div className="contact-details" key={friend.id}>
          <p>Name: {friend.name}</p>
          <p>Age: {friend.age}</p>
          <p>Email: {friend.email}</p>
          <p className="contact-images">
            <img src="../pencil.png" alt="edit" />
            <img src="../bin.png" alt="trash" />
          </p>
        </div>
      ))}
    </div>
  );
}

export default ShowFriends;
