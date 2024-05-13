import React, { Component } from 'react'
import Navbar from '../components/navbar'
import Animation from '../components/animation'
import Grid1 from '../components/grid1'
import Products from '../components/products'
import Classic from '../components/classic'
import Signup from '../components/signup'
import Footer from '../components/footer'

export default class Home extends Component {
  render() {
    return (
      <div>
       <Navbar/>
       <Animation/>
       <Grid1/>
       <Products/>
       <Classic/>
       <Signup/>
       <Footer/>
      </div>
    )
  }
}
