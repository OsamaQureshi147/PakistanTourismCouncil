
import classes from './FamousPlace.module.css' 
import React from 'react'
export function Places_card(props) {
    return (
        <div 
        className={classes.items}> 
                <img src={props.pic} alt='images'/> 
                <h3>{props.name}</h3>
                <span className={classes.card_desc}>{props.description}</span>
        </div>
    )
}