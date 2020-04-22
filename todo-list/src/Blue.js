import React, {useContext} from 'react';
import ColorContext from './context/Color.context';
import Green from './Green';

const Blue = () => {
    const {increase, decrease} = useContext(ColorContext);
    return (
        <div className="blue">
            <button className="increment" onClick={increase}>+</button>
            <button className="decrement" onClick={ decrease}>-</button>
            <Green>green</Green>
        </div>
    )
}

export default Blue;
