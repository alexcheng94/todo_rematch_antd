import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";

import { Provider } from "react-redux";
import { init } from "@rematch/core";
import * as models from "./models";

import createRematchPersist from "@rematch/persist";
// import { PersistGate } from "redux-persist/lib/integration/react";

const persistPlugin = createRematchPersist({
  whitelist: ["todos"],
  throttle: 1000,
  version: 1
});

const store = init({ models, plugins: [persistPlugin] });

// const persistor = getPersistor();
// console.log(persistor);

ReactDOM.render(
  <Provider store={store}>
    {/* <PersistGate persistor={persistor} loading={null}> */}
      <App />
    {/* </PersistGate> */}
  </Provider>,
  document.getElementById("root")
);
