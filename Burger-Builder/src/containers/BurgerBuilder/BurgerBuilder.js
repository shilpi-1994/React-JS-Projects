import React, { Component } from 'react';
import Aux from '../../Hoc/Aux';
import Burger from '../../components/Burger/Burger';

class BurgerBuilder extends Component {
    render() {
        return (
            <Aux>
                <Burger/>
            </Aux>
        );
    }
}

export default BurgerBuilder;