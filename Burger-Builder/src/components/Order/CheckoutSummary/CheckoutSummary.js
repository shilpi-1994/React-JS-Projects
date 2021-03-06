import React from 'react';
import Burger from '../../Burger/Burger';
import Button from '../../UI/Button/Button';
import classes from './CheckoutSummary.css';

const checkoutSummary = (props) => {
    return (
        <div className={classes.CheckoutSummary}>
            <h1>Hope this burger brings joy to your face.</h1>
            <div style={{width: '100%', margin: 'auto'}}>
                <Burger ingredients={props.ingredients}/>
            </div>
            <Button buttonType="Danger" clicked={props.checkoutCancelled}>CANCEL</Button>
            <Button buttonType="Success" clicked={props.checkoutContinued}>CONTINUE</Button>
        </div>
    );
} 

export default checkoutSummary;