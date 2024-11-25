import React from 'react';
import ReactDOM from 'react-dom/client'; // Updated import for React 18
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import './index.css';

// Create root
const root = ReactDOM.createRoot(document.getElementById('root'));

export default function Dummy(){
  return <h1>this is dummy</h1>
}
// Render App
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
