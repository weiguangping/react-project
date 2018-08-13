import cookies from 'js-cookie';
const LOGIN='LOGIN'
const LOGOUT='LOGOUT'
export function auth(state={isAuth:localStorage.user?true:false,user:'李云龙'},action) {
  switch (action.type) {
    case LOGIN:
      return {isAuth:true,...action}
    case LOGOUT:
      return {isAuth:false}
    default:
      return state
  }
}
export function login(user) {
  localStorage.setItem('user',JSON.stringify(user))
  window.location.href='/#'
  return {type:LOGIN,user:user}
}
export function update(user) {
  localStorage.setItem('user',JSON.stringify(user))
  return {type:LOGIN,user:user}
}
export function login2(user) {
  return {type:LOGIN,user:user}
}
export function logout() {
  localStorage.clear()
  cookies.remove()
  window.location.href='/#'
  return {type:LOGOUT}
}
export function initAuth() {
  return dispatch => {
    let user=localStorage.user;
    return user ? dispatch(checkToken(JSON.parse(user))) : dispatch(logout());
  };
}
export function checkToken(user) {
  return dispatch => {
    console.log('111');
    console.log(user);
    return user ? dispatch(login2(user)) : dispatch(logout());
  };
}