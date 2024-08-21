import React from 'react';

const Add_Button = ({onClick, ...props}) => {
    return (
        <button 
            onClick={onClick} 
            {...props} 
            style={{
                background: 'transparent',
                border: 'none',
                cursor: 'pointer',
                padding: 0,
                outline: 'none',
                marginLeft: '5px'
            }}
            >
            <svg width="35" height="35" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="2" y="1" width="30" height="30" fill="#9e78cf" stroke="#9e78cf" strokeWidth="2" rx="6"/>
                <line x1="17.25" y1="8" x2="17.25" y2="24" stroke="white" strokeWidth="2"/>
                <line x1="9.25" y1="16" x2="25.25" y2="16" stroke="white" strokeWidth="2"/>
            </svg>
            </button>
    );
};

export default Add_Button;