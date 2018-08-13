import React from "react";
// import { Link } from "react-router-dom";
import { injectIntl } from "react-intl";

class Auth extends React.Component {
  render() {
    // const { intl } = this.props;
    // let footer1 = intl.formatMessage({ id: "common.footer1" });
    return (
      <div className="footer">
        <div className='mg'>
          <div>footer</div>
        </div>
      </div>
    );
  }
}
Auth = injectIntl(Auth);
export default Auth;
