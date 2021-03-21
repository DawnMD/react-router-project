import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore } from "redux";
import reducers from "./reducers";
import "semantic-ui-css/semantic.min.css";

import App from "./components/App";

ReactDOM.render(
  <React.StrictMode>
    <Provider
      store={createStore(
        reducers,
        window.__REDUX_DEVTOOLS_EXTENSION__ &&
          window.__REDUX_DEVTOOLS_EXTENSION__()
      )}
    >
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
