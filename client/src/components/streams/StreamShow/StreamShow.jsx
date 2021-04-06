import { Component, createRef } from "react";
import { connect } from "react-redux";
import { fetchStream } from "../../../actions";
import flv from "flv.js";

class StreamShow extends Component {
  constructor(props) {
    super(props);
    this.videoRef = createRef();
  }
  componentDidMount() {
    const { id } = this.props.match.params;
    // console.log(this.videoRef);
    this.props.fetchStream(id);
    this.buildPlayer();
  }
  componentDidUpdate() {
    this.buildPlayer();
  }
  componentWillUnmount() {
    // console.log("unmounted");
    this.player.destroy();
  }
  buildPlayer = () => {
    const { id } = this.props.match.params;
    if (this.player || !this.props.stream) {
      return;
    }
    this.player = flv.createPlayer({
      type: "flv",
      url: `http://localhost:8000/live/${id}.flv`,
    });
    this.player.attachMediaElement(this.videoRef.current);
    this.player.load();
  };
  render() {
    // console.log(this.props);
    if (!this.props.stream) {
      return <div>Loading...</div>;
    }
    const { title, descp } = this.props.stream;
    return (
      <div>
        <video ref={this.videoRef} style={{ width: "100%" }} controls />
        <h1>{title}</h1>
        <h5>{descp}</h5>
      </div>
    );
  }
}
const mapStateToProps = (state, ownProps) => {
  return { stream: state.streams[ownProps.match.params.id] };
};
export default connect(mapStateToProps, { fetchStream })(StreamShow);
