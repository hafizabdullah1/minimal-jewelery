import React from 'react'

export default class Signup extends React.Component {
  render() {
    return (
      <div>
        <div className="signup">
            <div className="sign1">
                <h1>NEWSLETTER</h1>
                <p>SIGN UP TO OUR NEWSLETTER AND SAVE 20% OFF FOR YOUR NEXT PURCHASE</p>
            </div>
            <div className="sign2">
                <input type="text" placeholder='Enter Your Email' />
                <button>Subscribe</button>
            </div>
        </div>
      </div>
    )
  }
}
