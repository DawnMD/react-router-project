import { Component } from "react";
import _ from "lodash";
import { connect } from "react-redux";
import { fetchStream, editStream } from "../../../actions";
import StreamForm from "../StreamForm";

class StreamEdit extends Component {
  componentDidMount() {
    this.props.fetchStream(this.props.match.params.id);
  }
  onSubmit = (formValues) => {
    this.props.editStream(this.props.match.params.id, formValues);
  };
  render() {
    console.log(this.props);
    return (
      <div>
        <h3>Edit a Stream</h3>
        <StreamForm
          onSubmit={this.onSubmit}
          initialValues={_.pick(this.props.streamDetail, "title", "descp")}
        ></StreamForm>
      </div>
    );
  }
}
const mapStateToProps = (state, ownProps) => {
  return { streamDetail: state.streams[ownProps.match.params.id] };
};
export default connect(mapStateToProps, { fetchStream, editStream })(
  StreamEdit
);
