import React from 'react';
import Aux from '../../../Hoc/Aux';
import Button from '../../UI/Button/Button';

const orderSummary = (props) => {
    const ingredientsSummary = Object.keys(props.ingredients)
                        .map(igKey => {
                            return ( <li key={igKey}>
                                        <span style={{textTransform: 'capitalize'}}>{igKey}: </span>{props.ingredients[igKey]}
                            </li> );
                        });
    return(
            <Aux>
            <h3>Your Order</h3>
            <p>A delicious burger with the following ingredients: </p>
            <ul>
                {ingredientsSummary}
            </ul>
            <p><strong>Total Price: ${props.price.toFixed(2)}</strong></p>
            <p>Continue to Checkout?</p>
            <Button buttonType="Danger" clicked={props.purchaseCancelled}>CANCEL</Button>
            <Button buttonType="Success" clicked={props.puchaseContinued}>CONTINUE</Button>
        </Aux>
    );
}

export default orderSummary;