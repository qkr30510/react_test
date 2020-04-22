import React, {useContext} from 'react';
import ColorContext from './context/Color.context';

const Green = () => {
    const value = useContext(ColorContext);
    return (
        <div className="green">
            <span className="number">
                {value.number}
            </span>
        </div>
    );
};

export default Green;
