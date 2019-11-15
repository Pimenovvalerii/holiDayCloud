import React from 'react';
import './ReturnButton.css'

function ReturnButton(props){
    return (
        <button className="return_button"
                onClick={props.returnButton}
        >
            X
        </button>
    )
}
export default ReturnButton;