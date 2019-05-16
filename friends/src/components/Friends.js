import React from "react";
import { connect } from "react-redux";
import { getFriends } from "../actions";
import { Route, NavLink } from "react-router-dom";

class Friends extends React.Component {
  constructor() {
    super();
  }

  componentDidMount() {
    console.log(":: IN COMPONENT DID MOUNT ::");
    this.props.getFriends();
  }

  render() {
    console.log(":: FRIENDS IN RENDER IS ::" + this.props.friends);
    return (
      <div className="address-book">
        <nav>
          <div className="addr-bk-heading">
            <h1> My Address Book</h1>
          </div>
          <div className="nav-links">
            <NavLink>Contact List</NavLink>
            <NavLink>Add</NavLink>
          </div>
        </nav>
        <div className="contacts">
          {this.props.friends.map(friend => (
            <div className="contact-details" key={friend.id}>
              <p>Name: {friend.name}</p>
              <p>Age: {friend.age}</p>
              <p>Email: {friend.email}</p>
              <p className="contact-images">
                <img src="../pencil.png" />
                <img src="../bin.png" />
              </p>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    friends: state.friends.friends
  };
};
export default connect(
  mapStateToProps,
  { getFriends }
)(Friends);
