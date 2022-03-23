import React from "react";
import ReactDOM from "react-dom";
import "./reset.css";
import "./index.css";
import "./utilities/Loader/loader.css";
import "./scss/main.scss";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import Layout from "./containers/Layout/layout";
import { Provider } from "react-redux";
import { createStore, applyMiddleware, combineReducers } from "redux";
import fetchNewsReducer from "./store/Reducres/fetchNews";
import detailsPageReducer from "./store/Reducres/detailsPageReducer";
import searchPageReducer from "./store/Reducres/searchReducer";
import createSagaMiddleWare from "redux-saga";
import watchSaga from "./store/saga";
import { Container } from "@mui/material";
const sagaMiddleWare = createSagaMiddleWare();
const rootReducer = combineReducers({
  fetchItems: fetchNewsReducer,
  detailsPage: detailsPageReducer,
  searchPage: searchPageReducer,
});
const store = createStore(rootReducer, applyMiddleware(sagaMiddleWare));
sagaMiddleWare.run(watchSaga);
ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <Container maxWidth="xl">
          <Layout>
            <App />
          </Layout>
        </Container>
      </Provider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
