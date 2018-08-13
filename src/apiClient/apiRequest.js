import axios from "axios";
import { merge } from "lodash";
import config from "../config";

export default function(options, data) {
  let headers = {
    "Content-Type": "application/json"
  };
  let userheader = localStorage.userheader
    ? JSON.parse(localStorage.userheader)
    : null;
  if(localStorage.token&&data===2){
     headers["access_token"] = localStorage.token;
  }
  if (userheader && data===1) {
    headers["uid"] = userheader["uid"];
    headers["access-token"] = userheader["token"];
    headers["client"] = userheader["client"];
  }
  // submit token to server even token is null
  const defaultOpt = {
    baseURL: config.apiBaseUrl,
    headers
  };
  console.log("headers");
  console.log(headers);

  const opt = merge({}, defaultOpt, options);
  return new Promise(function(resolve, reject) {
    axios(opt)
      .then(res => {
        if (res.status === 200) {
          resolve(res);
        }
      })
      .catch(err => {
        let str = JSON.stringify(err);
        if (
          (err.response && err.response.status === 401) ||
          (err.response && err.response.status === 403)
        ) {
          // window.location.href = "/#/loginpop";
          // setTimeout(() => {
          //   localStorage.clear();
          //   window.location.reload();
          // }, 0);
        }
        console.log("err");
        console.log(str);
        reject(err);
      });
  });
}
