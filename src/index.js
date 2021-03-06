import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Navbar from "./Component/Navbar/Index"
import Animation from "./Component/Animation/Animation"
import reportWebVitals from './reportWebVitals';
import Slider from './Component/Slider/Slider';

ReactDOM.render(
  <React.StrictMode>
    <div className="">
      {/* <Navbar /> */}
      <Animation /> 
      <Slider />
    </div>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
