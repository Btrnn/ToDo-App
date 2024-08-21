import React from 'react';
import { PiTrashSimple } from "react-icons/pi";

const Delete_Button = ({ onClick, iconSize}) => {
  return (
    <button onClick={onClick} style={{float: 'right', backgroundColor: 'transparent', border: 'none'}}>
      <PiTrashSimple size={iconSize} color="#9e78cf" cursor = 'pointer'/>
    </button>
  );
};

export default Delete_Button;
