import {React,useRef} from 'react'
import {Link} from 'react-router-dom'
import classes from './Banner.module.css'
export const Banner = () => {

  const ref = useRef(null);

  const handleClick = () => {
    alert("here");
    ref.current?.scrollIntoView({behavior: 'smooth'});
  };
  return (
    <div className={classes.bannerWrapper}>
      <div className={classes.overlay}></div>
     <div className={classes.textWrapper}>
      <h5>Be the part of this Wonderful Journey</h5>
      <h1>Incredible Paksitan!</h1>
      {/* <Link to="www.google.com">Explore Now</Link> */}
      <button className={classes.explore} onClick={handleClick} >Explore Now</button>
     </div>
    </div>
  )
}
