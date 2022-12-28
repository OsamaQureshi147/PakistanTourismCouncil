import React from 'react'
import {Link} from 'react-router-dom'
import classes from './Banner.module.css'
export const Banner = () => {
  return (
    <div className={classes.bannerWrapper}>
      <div className={classes.overlay}></div>
     <div className={classes.textWrapper}>
      <h5>Be the part of this Wonderful Journey</h5>
      <h1>Incredible Paksitan!</h1>
      {/* <Link to="www.google.com">Explore Now</Link> */}
      <button className={classes.explore}>Explore Now</button>
     </div>
    </div>
  )
}
