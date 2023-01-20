import React from "react";
import { hot } from 'react-hot-loader/root';
import './styles.scss'

const ButtonReact = ({nameBtn}) => {
    return(
        <button onClick={() => console.log('REACT BTN', nameBtn)} className='m-4'>
            REACT - {nameBtn}
        </button>
    )
};

export default hot(ButtonReact);
// export default ButtonReact;
