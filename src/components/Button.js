import React from "react";
import { connect } from "react-redux";
import { getNews } from "../actions";

let styles = {
  backgroundColor: "HotPink",
  width: "150px",
  height: "30px",
  borderRadius: "10px",
  display: "block",
  margin: "50px auto",
  fontSize: "15px",
  border: "3px solid "
};

class Button extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hover: false };
  }
  render() {
    return (
      <button
        style={
          !this.state.hover
            ? styles
            : { ...styles, backgroundColor: "DarkTurquoise " }
        }
        onMouseOut={() => {
          this.setState({ hover: false });
        }}
        onMouseOver={() => {
          this.setState({ hover: true });
        }}
        onClick={this.props.getNews}
      >
        Click to get News
      </button>
    );
  }
}

const mapDispatchToProps = {
  getNews: getNews
};

Button = connect(null, mapDispatchToProps)(Button);

export default Button;
