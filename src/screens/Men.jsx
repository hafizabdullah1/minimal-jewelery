import React from 'react'
import Navbar from '../components/navbar'
import Catagory from '../components/catagory'
import Footer from '../components/footer'

export default class Men extends React.Component {
  render() {
    return (
      <div>
        <Navbar/>
        <Catagory/>
        <Footer/>
      </div>
    )
  }
}
