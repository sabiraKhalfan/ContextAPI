import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Provider } from './Components/Context';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider value={{name:"Example",id:"195"}}>
    <App />
</Provider>
);


