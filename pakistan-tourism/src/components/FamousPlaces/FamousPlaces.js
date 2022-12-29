import React from 'react'

import classes from './FamousPlace.module.css'
export const FamousPlaces = () => {
    return (
        <div className={classes.places}>
            <h2>You'll fall in love with Paksitan</h2>
            <p>Explore Pakistan from Gilgit to Karachi</p>
            <div>
                <ul>
                    <li>All</li>
                    <li>North</li>
                    <li>Central</li>
                    <li>North-Eastern</li>
                    <li>South</li>
                </ul>
            </div>
           <div className={classes.inside}>
           <div className={classes.items}>
                <div className={classes.image_wrapper}>
                <img src='' alt='images'/>
                </div>
                <h3>Gwalior Fort</h3>
                <span>Punjab</span>
            </div>

            <div className={classes.items}>
                <div className={classes.image_wrapper}>
                    <img src='' alt=''/>
                </div>
                <h3>Twang</h3>
                <span>Punjab</span>
            </div>
            
            <div className={classes.items}>
                <div className={classes.image_wrapper}>
                    <img src='' alt=''/>
                </div>
                <h3>Camel Safari</h3>
                <span>Punjab</span>
            </div>
            <div className={classes.items}>
                <div className={classes.image_wrapper}>
                    <img src='' alt=''/>
                </div>
                <h3>sanchi stupa</h3>
                <span>Punjab</span>
            </div>


            <div className={classes.items}>
                <div className={classes.image_wrapper}>
                    <img src='' alt=''/>
                </div>
                <h3>alleppey</h3>
                <span>Punjab</span>
            </div>

            <div className={classes.items}>
                <div className={classes.image_wrapper}>
                    <img src='' alt=''/>
                </div>
                <h3>Mehangarh Fort</h3>
                <span>Punjab</span>
            </div>

            <div className={classes.items}>
                <div className={classes.image_wrapper}>
                    <img src='' alt=''/>
                </div>
                <h3>Shahrukh khan</h3>
                <span>Punjab</span>
            </div>

            <div className={classes.items}>
                <div className={classes.image_wrapper}>
                    <img src='' alt=''/>
                </div>
                <h3>umngot river</h3>
                <span>Punjab</span>
            </div>
           </div>
        </div>
    )}