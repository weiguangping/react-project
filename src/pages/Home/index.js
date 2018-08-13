import React from "react";
// import { Link } from "react-router-dom";
import Header from "./../../components/Header";
import { injectIntl } from "react-intl";
import * as request from '../../apiClient/request'
class Auth extends React.Component {
  state={
    provider:'email',
    uid:'',
    password:''
  }
  render() {
    // const { intl } = this.props;
    // let login = intl.formatMessage({ id: "login.login" });
    return (
      <React.Fragment>
        <Header type={0}/>
        <div className="center">
          <div className="home">
            <div>home</div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
Auth = injectIntl(Auth);
export default Auth;
