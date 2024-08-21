import React from 'react';
import { IoCheckmark } from 'react-icons/io5';

const Check_Button = ({ onClick, iconSize}) => {
  return (
    <button onClick={onClick} style={{backgroundColor: 'transparent', border: 'none'}}>
      <IoCheckmark size={iconSize} color="#9e78cf" cursor = 'pointer' />
    </button>
  );
};

export default Check_Button;
