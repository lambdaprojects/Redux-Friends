import React from "react";
import { connect } from "react-redux";
import { getFriends } from "../actions";
import { Route, NavLink } from "react-router-dom";
import ShowFriends from "./ShowFriends";
import AddFriends from "./AddFriends";

class Friends extends React.Component {
  constructor() {
    super();
  }

  componentDidMount() {
    console.log(":: IN COMPONENT DID MOUNT ::");
    this.props.getFriends();
  }

  addFriends = () => {
    console.log(":: CALLING ADD FRIENDS IN FRIEND.JS ::");
  };

  render() {
    console.log(":: FRIENDS IN RENDER IS ::" + this.props.friends);
    return (
      <div className="address-book">
        <nav>
          <div className="addr-bk-heading">
            <h1> My Address Book</h1>
            <div className="nav-links">
              <NavLink className="nav-link" to="/">
                Home
              </NavLink>
              <NavLink className="nav-link">Contacts</NavLink>
              <NavLink className="nav-link" to="/add-friends-form">
                Add
              </NavLink>
            </div>
          </div>
        </nav>
        <Route
          exact
          path="/"
          render={props => (
            <ShowFriends {...props} friends={this.props.friends} />
          )}
        />
        <Route exact path="/add-friends-form" component={AddFriends} />
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
