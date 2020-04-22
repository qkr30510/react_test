import {createContext} from 'react';

const ColorContext = createContext ({
    number: 0,
    increase: () => {},
    decrease: () => {}
});

export default ColorContext;