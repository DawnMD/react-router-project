import { BrowserRouter, Route } from "react-router-dom";
import StreamCreate from "./streams/StreamCreate/StreamCreate";
import StreamEdit from "./streams/StreamEdit/StreamEdit";
import StreamDelete from "./streams/StreamDelete/StreamDelete";
import StreamList from "./streams/StreamList/StreamList";
import StreamShow from "./streams/StreamShow/StreamShow";
import Header from "../components/Header/Header";

function App() {
  return (
    <div className="ui container">
      <BrowserRouter>
        <div>
          <Header />
          <Route path="/" exact component={StreamList} />
          <Route path="/streams/new" exact component={StreamCreate} />
          <Route path="/streams/edit" exact component={StreamEdit} />
          <Route path="/streams/delete" exact component={StreamDelete} />
          <Route path="/streams/show" exact component={StreamShow} />
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
