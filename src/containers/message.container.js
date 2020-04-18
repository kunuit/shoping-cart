import React, { Component } from 'react';
import { connect } from "react-redux";
import PropTypes from "prop-types";
import Message from "../components/Message";

class MessageContainer extends Component {
  render() {
    // khai bao bien
    var { message } = this.props
    // the tuong tac JSX
    return (
      <Message message={message} />
    )
  }
  // cac function thuc thi


}

// check proptypes of container
MessageContainer.propTypes = {
  message: PropTypes.string.isRequired
}
// connect to redux de lay state trong store
const mapStateToProp = state => {
  return {
    message: state.message
  }
}


export default connect(mapStateToProp, null)(MessageContainer);
