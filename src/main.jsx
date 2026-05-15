import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css' // Reba ko iyi file ihari muri src/

// Hano niho React ifatira id ya 'root' iri muri index.html ikayishyiramo website
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
