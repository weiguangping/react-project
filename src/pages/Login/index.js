import React from "react";
import { connect } from "react-redux";
import { login } from "./../../reducer/Auth.redux";
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
  onInput(e,name){
    this.setState({
      [name]:e.target.value
    })
  }
  login() {
    console.log(this.props);
    let {provider,uid,password}=this.state;
    let data={provider,uid,password}
    request.post('auth/sign_in',data).then(res=>{
      console.log('res');
      console.log(res);
      this.props.login(res);
      // this.props.history.push("/login");
    }).catch(err=>{
      alert('Invalid uid or password.')
      
    })
  }
  render() {
    // const { intl } = this.props;
    // let login = intl.formatMessage({ id: "login.login" });
    return (
      <React.Fragment>
        <Header type={0}/>
        <div className="center">
          <div className="login">
            <div>login</div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
const mapStatetoProps = state => {
  return { auth: state };
};
const actionCreators = { login };
Auth = connect(mapStatetoProps, actionCreators)(injectIntl(Auth));
export default Auth;
