import React, { Component } from "react";

class GoogleAuth extends Component {
  state = { isAuth: null };
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
          this.onAuthChange();
          this.auth.isSignedIn.listen(this.onAuthChange);
        });
    });
  }
  onAuthChange = () => {
    this.setState({ isAuth: this.auth.isSignedIn.get() });
  };
  onSignIn = () => {
    this.auth.signIn();
  };
  onSignOut = () => {
    this.auth.signOut();
  };
  isSigned = () => {
    switch (this.state.isAuth) {
      case true:
        return (
          <button className="ui red google button" onClick={this.onSignOut}>
            <i className="google icon" />
            Sign Out
          </button>
        );
      case false:
        return (
          <button className="ui blue google button" onClick={this.onSignIn}>
            <i className="google icon" />
            Sign In With Google
          </button>
        );
      default:
        return null;
    }
  };
  render() {
    return <div>{this.isSigned()}</div>;
  }
}

export default GoogleAuth;
