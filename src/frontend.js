// import "./frontend.scss"
// import React, { useState } from "react"
// import ReactDOM from "react-dom"
// import { Stripe } from "./components/Stripe"

// const divsToUpdate = document.querySelectorAll(".boilerplate-update-me")

// divsToUpdate.forEach(div => {
//   const data = JSON.parse(div.querySelector("pre").innerText)
//   ReactDOM.render(<OurComponent {...data} />, div)
//   div.classList.remove("boilerplate-update-me")
// })

// function OurComponent(props) {
//   return <Stripe />
// }


import "./frontend.scss"
import React, { useState } from "react"
import ReactDOM from "react-dom"
import { Stripe } from "./components/Stripe"
import App from "./App"
import { GetPaypal } from './components/GetPaypal';
import { GetStripe } from './components/GetStripe';
import { Paypal } from './components/Paypal';
import { Home } from "./components/Home"


const divsToUpdate = document.querySelectorAll(".boilerplate-update-me")
divsToUpdate.forEach(div => {
  ReactDOM.render(
    <OurComponent />, div)
  div.classList.remove("boilerplate-update-me")
})

function OurComponent(props) {
  // return <Home/>
  return <><Stripe /> <Paypal /> <GetPaypal/> <GetStripe/></>
}












// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';
// import { BrowserRouter } from 'react-router-dom';

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <BrowserRouter>
//     <React.StrictMode>
//       <App />
//     </React.StrictMode>
//   </BrowserRouter>

// );

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
