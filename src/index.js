import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import {
  Home,
  About,
  MyPic,
  Contact,
  Navigation
} from './components'
const Main = () => {
  return (
    <div className='Main vh-100 align-items-center  d-flex container'>
      <section className='h-75 shadow p-3 bg-body rounded w-100 row'>
        <Router >
          <div className='col-6'>
            <Navigation />
          </div>
          <div className='col-6 p-10'>
            <Routes>
              <Route path='/' element={<Home />}  />
              <Route path='/about' element={<About />} />
              <Route path='/contact' element={<Contact />} />
            </Routes>
          </div>
        </Router>
      </section>
      <div className=' shadow-lg p-0 bg-body rounded d-flex ' style={{ "position": "absolute", "width": "32%", "height": "85%", "left": "18%","justifyContent":"center" }} >
        <MyPic />
      </div>
    </div>
  )
}

const rootElement = document.getElementById('root');
ReactDOM.render(<Main />, rootElement)
reportWebVitals();
