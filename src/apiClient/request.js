import apiRequest from './apiRequest';

export async function get(url,newdata) {
 
  const opt = {
    method: 'get',
    url: url
  };

  const response = await apiRequest(opt,newdata);
  return new Promise(function (resolve, reject) {
    console.log('get');
    console.log(response);
    
   if(!response.data.response&&response.data.status&&response.data.status!=='ok'){
      // alert(response.data.errors?response.data.errors:response.data.error);
      reject(response.data.errors);
    }else{
      resolve(response.data.response);
    }
  })
}
export async function post(url,data,newdata) {
 
  const opt = {
    method: 'post',
    url: url,
    data
  };

  const response = await apiRequest(opt,newdata);
  
  return new Promise(function (resolve, reject) {
    console.log('post');
    console.log(response);
    if(!response.data.response&&response.data.status!=='ok'){
      // alert(response.data.errors?response.data.errors:response.data.error);
      reject(response.data.errors);
    }else{
      let header=response.headers;
      if(url==='auth/sign_in'){
        let data={token:header["access-token"],uid:header.uid,client:header.client}
        localStorage.setItem('userheader',JSON.stringify(data))
      }
      resolve(response.data.response);
    }
  })
}
export async function put(url,data,newdata) {
 
  const opt = {
    method: 'put',
    url: url,
    data
  };

  const response = await apiRequest(opt,newdata);
  return new Promise(function (resolve, reject) {
    if(!response.data.response){
      alert(response.data.errors?response.data.errors:response.data.error);
      reject(response.data.errors);
    }else{
      resolve(response.data.response);
    }
  })
}
export async function del(url,newdata) {
 
  const opt = {
    method: 'delete',
    url: url
  };

  const response = await apiRequest(opt,newdata);
  return new Promise(function (resolve, reject) {
    if(!response.data.success){
      alert(response.data.errors?response.data.errors:response.data.error);
      reject(response.data.errors);
    }else{
      resolve(response.data.response);
    }
  })
}