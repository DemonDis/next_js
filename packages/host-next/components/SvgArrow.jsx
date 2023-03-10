import React from 'react';

const SvgArrow = ({size }) => {
    return (
        <svg 
            space="preserve" 
            version="1.0" 
            viewBox="0 0 902.25 364.72" 
            xmlns="http://www.w3.org/2000/svg"
            width={size}
            height={size}
        >
            <g transform="rotate(180 451.12 182.36)">
                <polygon points="902.25 222.99 233.18 222.99 233.18 364.72 0 182.36 233.18 0 233.18 141.73 902.25 141.73"/>
            </g>
        </svg>
        
    )
};

SvgArrow.defaultProps = {
    size: 100,
}

export default SvgArrow;