import React from 'react'
import {CiLocationOn} from "react-icons/ci"
import {GiCommercialAirplane} from "react-icons/gi"
import {AiOutlineClockCircle} from "react-icons/ai"
import {TfiHeadphoneAlt} from "react-icons/tfi"
export default class Animation extends React.Component {
  render() {
    return (
      <div>
        <div className='mainuu'>
<div className="animateDiv">
  <div></div>
  <div></div>
</div>
<div className='storediv'>
  <div className="substore1">
    <CiLocationOn className='subicon'/>
    <h6 className='subhead'>Store Location</h6>
    <p className='subp'>Find your nearest event store</p>
  </div>
  <div className="substore1 substore2">
    <GiCommercialAirplane className='subicon'/>
    <h6 className='subhead'>Free Shipping</h6>
    <p className='subp'>Free Return & Exchange</p>
  </div>
  <div className="substore1 substore3">
    <AiOutlineClockCircle className='subicon'/>
    <h6 className='subhead'>Money Back</h6>
    <p className='subp'>100% within 30days</p>
  </div>
  <div className="substore1 substore4">
    <TfiHeadphoneAlt className='subicon'/>
    <h6 className='subhead'>24H Support</h6>
    <p className='subp'>Service Report Fast 24/7</p>
  </div>
</div>

        </div>
      </div>
    )
  }
}



