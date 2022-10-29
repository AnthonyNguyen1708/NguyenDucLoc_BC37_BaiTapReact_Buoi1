import React, { Component } from 'react'

export default class Header extends Component {
  render() {
    return (
      <div className='header w-full py-2 bg-dark'>
            <div className='container px-lg-5 d-flex justify-content-between align-items-center text-light'>
              <div className="right">
                <h5>Start Bootstrap</h5>
              </div>
              <nav className="left">
              <a className='mx-2 text-light text-decoration-none' href="#">Home</a>
              <a className='mx-2 text-light text-decoration-none' href="#">About</a>
              <a className='mx-2 text-light text-decoration-none' href="#">Conatct</a>
              </nav>
            </div> 
      </div>
    )
  }
}
