import React from "react";
import { connect } from "react-redux";
import { getFriends, delFriends } from "../actions";
import { Route, NavLink } from "react-router-dom";
import ShowFriends from "./ShowFriends";
import AddFriends from "./AddFriends";
import PrivateRoute from "../PrivateRoute";
import Login from "./Login";

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

  delFriend = id => {
    this.props.delFriends(id);
  };

  render() {
    console.log(":: FRIENDS IN RENDER IS ::" + this.props.friends);
    return (
      <div className="address-book">
        <nav>
          <div className="addr-bk-heading">
            <h1> My Address Book</h1>
            <div className="nav-links">
              <NavLink exact to="/">
                Home
              </NavLink>
              <NavLink to="/add-friends-form">Contacts</NavLink>
              <NavLink to="/add-friends-form">Add</NavLink>
            </div>
          </div>
        </nav>
        <PrivateRoute
          exact
          path="/"
          component={props => (
            <ShowFriends
              {...props}
              friends={this.props.friends}
              delFriend={this.delFriend}
            />
          )}
        />
        <Route path="/login" component={Login} />
        <PrivateRoute exact path="/add-friends-form" component={AddFriends} />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    friends: state.friends.friends,
    isLoading: state.friends.isLoading,
    error: state.friends.error
  };
};
export default connect(
  mapStateToProps,
  { getFriends, delFriends }
)(Friends);
