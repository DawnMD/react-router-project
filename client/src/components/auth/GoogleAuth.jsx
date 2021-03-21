import React, { Component } from "react";
import { signIn, signOut } from "../../actions";
import { connect } from "react-redux";

class GoogleAuth extends Component {
  componentDidMount() {
    window.gapi.load("client:auth2", () => {
      window.gapi.client
        .init({
          clientId:
            "284372302467-fsmcl6d6g74rnskk4vg26a30cjm217ol.apps.googleusercontent.com",
          scope: "email",
        })
        .then(() => {
          this.auth = window.gapi.auth2.getAuthInstance();
          this.onAuthChange(this.auth.isSignedIn.get());
          this.auth.isSignedIn.listen(this.onAuthChange);
        });
    });
  }
  onAuthChange = (signed) => {
    if (signed) {
      this.props.signIn(this.auth.currentUser.get().getId());
    } else {
      this.props.signOut();
    }
  };
  onSignInClick = () => {
    this.auth.signIn();
  };
  onSignOutClick = () => {
    this.auth.signOut();
  };
  isSigned = () => {
    if (this.props.isSignedIn) {
      return (
        <button className="ui red google button" onClick={this.onSignOutClick}>
          <i className="google icon" />
          Sign Out
        </button>
      );
    } else if (this.props.isSignedIn === false) {
      return (
        <button className="ui blue google button" onClick={this.onSignInClick}>
          <i className="google icon" />
          Sign In With Google
        </button>
      );
    } else {
      return null;
    }
  };
  render() {
    return <div>{this.isSigned()}</div>;
  }
}
const mapStateToProps = (state) => {
  return { isSignedIn: state.auth.isSigned };
};
export default connect(mapStateToProps, { signIn, signOut })(GoogleAuth);
