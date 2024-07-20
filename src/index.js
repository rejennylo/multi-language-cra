// src/index.js
import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './i18n'; // 引入 i18n 初始化文件

ReactDOM.render(
  <Suspense fallback={<div>Loading...</div>}>
    <App />
  </Suspense>,
  document.getElementById('root')
);
