import React, { Component } from 'react'

export default class Carousel extends Component {
  render() {
    return (
    <div className='container bg-light py-5'>
        <div className='px-5'>
            <h1 className='display-4 font-weight-bold'>A warm welcome!</h1>
            <p className=''>Bootstrap utility classes are used to create this jumbotron since the old 
            <br /> 
            component has been removed from the framework. Why create custom CSS 
            <br /> 
            when you can use utilities?</p>
            <button className='btn btn-success '>Call to action</button>
        </div>
    </div>
    )
  }
}
