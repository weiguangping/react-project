import React from "react";
import { connect } from "react-redux";
import { logout } from "./../reducer/Auth.redux";
import { injectIntl } from "react-intl";
// import { Link } from "react-router-dom";
import * as request from "../apiClient/request";

class Auth extends React.Component {
  state = {
    topsearch: false,
    shownav: false,
    langshow: false,
    onInput: "",
    lang: "EN",
    user: null,
    topsearchlist: [],
    topsearchtext: ""
  };
  componentWillMount() {
    if (localStorage.lang && localStorage.lang === "zh") {
      this.setState({
        lang: "繁中"
      });
    } else {
      this.setState({
        lang: "EN"
      });
    }
    if (localStorage.userheader) {
      // request.get('api/v1/users/current',1).then(res=>{
      //   console.log('header');
      //   console.log(res);
      // })
    }
    if (localStorage.user) {
      this.setState({
        user: JSON.parse(localStorage.user)
      });
      //  this.getuser()
    }
  }
  logout() {
    // this.props.logout();
    // window.location.reload();
    request.del("auth/sign_out",1).then(res => {
      console.log("res");
      console.log(res);
      this.props.logout();
      window.location.reload();
    });
  }
  render() {
    // const { intl } = this.props;
    // let header1 = intl.formatMessage({ id: "common.header1" });
    return (
      <div className='header'>
        <div>header</div>
      </div>
    );
  }
}
const mapStatetoProps = state => {
  return { auth: state };
};
const actionCreators = { logout };
Auth = connect(mapStatetoProps, actionCreators)(injectIntl(Auth));
export default Auth;
