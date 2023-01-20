import React from "react";

const ButtonReact = ({nameBtn}) => {
    return(
        <button onClick={() => console.log('REACT BTN', nameBtn)}>
            REACT - {nameBtn}
        </button>
    )
}

export default ButtonReact;