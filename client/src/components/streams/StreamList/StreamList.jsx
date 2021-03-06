import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { listStreams } from "../../../actions";

class StreamList extends Component {
  componentDidMount() {
    this.props.listStreams();
  }
  renderList = () => {
    return this.props.streams.map((stream) => {
      return (
        <div className="item" key={stream.id}>
          {this.renderAdminButton(stream)}
          <i className="larhe middle aligned icon camera" />
          <div className="content">
            <Link to={`/streams/${stream.id}`}>{stream.title}</Link>
            <div className="description">{stream.descp}</div>
          </div>
        </div>
      );
    });
  };
  renderAdminButton = (stream) => {
    if (stream.userId === this.props.currentUserId) {
      return (
        <div className="right floated content">
          <Link to={`/streams/edit/${stream.id}`} className="ui button primary">
            Edit
          </Link>
          <Link
            to={`/streams/delete/${stream.id}`}
            className="ui button negative"
          >
            Delete
          </Link>
        </div>
      );
    }
  };
  renderCreateButton = () => {
    if (this.props.isSignedIn) {
      return (
        <div style={{ textAlign: "right" }}>
          <Link to="/streams/new" className="ui button primary">
            Create Stream
          </Link>
        </div>
      );
    }
  };
  render() {
    return (
      <div>
        <h2>Streams</h2>
        <div className="ui celled list">{this.renderList()}</div>
        {this.renderCreateButton()}
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    streams: Object.values(state.streams),
    currentUserId: state.auth.userId,
    isSignedIn: state.auth.isSigned,
  };
};
export default connect(mapStateToProps, { listStreams })(StreamList);
