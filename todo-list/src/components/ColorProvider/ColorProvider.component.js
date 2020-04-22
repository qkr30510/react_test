import React, {useState} from 'react';
import ColorContext from '../../context/Color.context';

const ColorProvider = ({ children}) => {
    const increase = () => {
        setNumber(prevState => {
            console.log("****");
            return {
                ...prevState,
                number:prevState.number + 1
            };
        });

    };

    const decrease = () => {
        setNumber(prevState => {
            console.log("-----");
            return{
                ...prevState,
                number:prevState.number - 1

            }
        })
    };

    const initialState = {
        number:0,
        increase,
        decrease
    };

    const [number, setNumber] = useState(initialState); 
    return(
        <ColorContext.Provider value={number}>{children}</ColorContext.Provider>
    )
}

export default ColorProvider;