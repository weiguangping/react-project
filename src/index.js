import React from 'react';
import ReactDOM from 'react-dom';
import './css/base.scss';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import {AppContainer} from 'react-hot-loader'
const render=Component=>{
  ReactDOM.render(
    <AppContainer>
      <Component />
    </AppContainer>
    ,document.getElementById('root')
  )
}
render(App);
registerServiceWorker();
if(module.hot){
  module.hot.accept('./App',()=>{
    render(App)
  })
}
