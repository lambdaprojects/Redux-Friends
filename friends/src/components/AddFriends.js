import React from "react";

function AddFriends(props) {
  return (
    <div className="add-contact">
      <form>
        <h2> Please enter the details below to add a contact </h2>
        <div className="add-contact-form">
          <div className="form-label">Name:</div>
          <div className="form-input">
            <input type="text" className="input-contact" />
          </div>
          <div className="form-label">Age:</div>
          <div className="form-input">
            <input type="text" className="input-contact" />
          </div>
          <div className="form-label">Email:</div>
          <div className="form-input">
            <input type="text" className="input-contact" />
          </div>
          <div className="form-button">
            <button>Add</button>
          </div>
          <div className="form-button">
            <button>Cancel </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default AddFriends;
