import React from 'react'
import './App.css';
import Routes from "../src/routes"
import history from "../src/Services/history"
import {BrowserRouter as Router} from 'react-router-dom'

export default function App() {
  return (
    <>  
      <Router history={history}>
            <Routes/>
      </Router>
    </>
  )
}