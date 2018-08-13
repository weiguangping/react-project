import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import login from "./pages/Login/";
import Header from "./components/Header";
import Footer from "./components/Footer";
export default class jspang extends React.Component {
  componentWillMount() {
    console.log("root2");
  }
  render() {
    return (
      <React.Fragment>
        <React.Fragment>
          <Switch>
            <Route exact path="/" component={login} />
            <Route path="/login" component={login} />
            <Redirect to="/" />
          </Switch>
        </React.Fragment>
        <Footer />
      </React.Fragment>
    );
  }
}
