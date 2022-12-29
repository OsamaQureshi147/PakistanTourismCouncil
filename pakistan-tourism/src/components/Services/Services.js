import React from 'react'

import classes from './Services.module.css'
export const Services = () => {
  return (
    <div className={classes.Service_background}>
        <div className={classes.overlay}></div>
        <div className={classes.textWrapper}>
            <h2>Always in our Coustomer Favour</h2>
            <p>Who are always with tight Budget</p>
        </div>
        <div className={classes.ammenties}>
            <div className={classes.inside_ammenties}>
                <img src='' alt='image1'/>
                <h3>Ammenties Selection</h3>
                <p>its Totally on you what you want and what you want to let go on hetel selection process</p>
            </div>

            <div  className={classes.inside_ammenties}>
                <img src='' alt='image2'/>
                <h3>Ammenties Selection</h3>
                <p>its Totally on you what you want and what you want to let go on hetel selection process</p>
            </div>

            <div  className={classes.inside_ammenties}>
                <img src='' alt='image3'/>
                <h3>Ammenties Selection</h3>
                <p>its Totally on you what you want and what you want to let go on hetel selection process</p>
            </div>
        </div>
    </div>
  )
}

