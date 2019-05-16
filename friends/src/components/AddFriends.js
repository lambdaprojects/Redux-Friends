import React from "react";
import { connect } from "react-redux";
import { addFriends } from "../actions";
import { getFriends } from "../actions";

class AddFriends extends React.Component {
  constructor() {
    super();
    this.state = {
      newFriend: { name: "", age: 0, email: "" },
      isLoading: false,
      error: ""
    };
  }

  handleChange = e => {
    e.persist();
    console.log(":: HANDLE CHANGE ::" + e.target.value);
    console.log(":: HANDLE CHANGE - TARGET NAME ::" + e.target.name);
    this.setState(prevState => ({
      ...this.state,
      newFriend: {
        ...prevState.newFriend,
        [e.target.name]: e.target.value
      }
    }));
  };

  addFriend = e => {
    e.preventDefault();
    this.props.addFriends(this.state.newFriend);
    this.props.getFriends();
    this.setState({
      newFriend: { name: "", age: 0, email: "" },
      isLoading: false,
      error: ""
    });
  };
  render() {
    console.log(":: NEW FRIEND IN RENDER IS ::" + this.state.newFriend);
    return (
      <div className="add-contact">
        <form onSubmit={this.addFriend}>
          <h2> Please enter the details below to add a contact </h2>
          <div className="add-contact-form">
            <div className="form-label">Name:</div>
            <div className="form-input">
              <input
                type="text"
                className="input-contact"
                value={this.state.newFriend.name}
                onChange={this.handleChange}
                name="name"
              />
            </div>
            <div className="form-label">Age:</div>
            <div className="form-input">
              <input
                type="text"
                className="input-contact"
                value={this.state.newFriend.age}
                onChange={this.handleChange}
                name="age"
              />
            </div>
            <div className="form-label">Email:</div>
            <div className="form-input">
              <input
                type="text"
                className="input-contact"
                value={this.state.newFriend.email}
                onChange={this.handleChange}
                name="email"
              />
            </div>
            <div className="form-button">
              <button onClick={this.addFriend}>Add</button>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => {
  console.log(
    ":: mapStateToProps :: newFriend is " + state.newFriend.newFriend
  );
  return {
    newFriend: state.newFriend.newFriend,
    isLoading: state.newFriend.isLoading,
    error: state.newFriend.error
  };
};
export default connect(
  mapStateToProps,
  { addFriends, getFriends }
)(AddFriends);
