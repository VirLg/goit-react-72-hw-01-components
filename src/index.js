import { createRoot } from 'react-dom/client';
import App from './components/App';



const root = createRoot(document.querySelector('#root'))
root.render(<App />)




// const elements = React.createElement('div', {a:5, b:10, children: ["привет"," " ,"мир"]},)
// console.log(elements);

// ReactDom.render(elements, document.querySelector('#root'))

// console.log(document.querySelector('#root'));

// ReactDOM.render(elements, document.querySelector('#root'))


// const jsxEl1 = <span>Hello</span>
// const jsxEl2 = <span>world</span>
// const jsxE = (<div>{jsxEl1}{jsxEl2}</div>)
// //  ReactDOM.render({children:(,)},jsxEl)
// console.log(jsxE);



// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
