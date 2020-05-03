import React from 'react';
import classes from './Order.css';

const order = () => {
    return(
        <div className={classes.Order}>
            <p>Ingredients</p>
            <p>Price</p>
        </div>
    );
}

export default order;