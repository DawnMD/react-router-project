import { Component, Fragment } from "react";
import Modal from "../../Modal/Modal";
import history from "../../../history";
import { Link } from "react-router-dom";
import { fetchStream, deleteStream } from "../../../actions";
import { connect } from "react-redux";

class StreamDelete extends Component {
  componentDidMount() {
    this.props.fetchStream(this.props.match.params.id);
  }
  actionsButton = () => {
    return (
      <Fragment>
        <button
          onClick={() => this.onDelete(this.props.match.params.id)}
          className="ui negative button"
        >
          Delete
        </button>
        <Link to="/" className="ui button">
          Cancel
        </Link>
      </Fragment>
    );
  };
  renderContent = (streamDetail) => {
    if (!streamDetail) {
      return "Are you sure to delete the stream ?";
    } else {
      return `Are you sure to delete ${streamDetail.title} ?`;
    }
  };
  onDelete = (id) => {
    this.props.deleteStream(id);
  };
  render() {
    // console.log(this.props);
    return (
      <Modal
        onDismiss={() => history.push("/")}
        modalHeader="Delete the Stream"
        modalContent={this.renderContent(this.props.streamDetail)}
        actions={this.actionsButton()}
      />
    );
  }
}
const mapStateToProps = (state, ownProps) => {
  return { streamDetail: state.streams[ownProps.match.params.id] };
};
export default connect(mapStateToProps, { fetchStream, deleteStream })(
  StreamDelete
);
