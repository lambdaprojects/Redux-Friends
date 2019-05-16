import React from "react";
import { connect } from "react-redux";
import { getFriends } from "../actions";

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
      <div>
        <h1> My Address Book</h1>
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
