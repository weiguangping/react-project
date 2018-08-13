import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import logins from "./pages/Login/";
import home from "./pages/Home/";
import Footer from "./components/Footer";
import { withRouter } from "react-router-dom";
class App extends React.Component {
  componentWillMount() {
    // console.log("111");
    // console.log(this.props);
  }
  componentDidMount() {
  }
  render() {
    let root = (
      <React.Fragment>
        <Switch>
          <Route exact path="/" component={home} />
          <Route exact path="/login" component={logins} />
          <Redirect to="/" />
        </Switch>
        <Footer />
      </React.Fragment>
    );
    return <React.Fragment>{root}</React.Fragment>;
  }
}
// const mapStatetoProps = state => {
//   return state.auth;
// };
// const actionCreators = { login, logout, initAuth };
// App = withRouter(connect(mapStatetoProps, actionCreators)(App));
export default withRouter(App);
