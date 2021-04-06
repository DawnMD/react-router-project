import { Router, Route, Switch } from "react-router-dom";
import StreamCreate from "./streams/StreamCreate/StreamCreate";
import StreamEdit from "./streams/StreamEdit/StreamEdit";
import StreamDelete from "./streams/StreamDelete/StreamDelete";
import StreamList from "./streams/StreamList/StreamList";
import StreamShow from "./streams/StreamShow/StreamShow";
import Header from "../components/Header/Header";
import history from "../history";

function App() {
  return (
    <div className="ui container">
      <Router history={history}>
        <div>
          <Header />
          <Switch>
            <Route path="/" exact component={StreamList} />
            <Route path="/streams/new" exact component={StreamCreate} />
            <Route path="/streams/edit/:id" exact component={StreamEdit} />
            <Route path="/streams/delete/:id" exact component={StreamDelete} />
            <Route path="/streams/:id" exact component={StreamShow} />
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
