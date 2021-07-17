import React from 'react';

const Button = ({title, onSubmit}) => {
    return ( 
        <div>
            <button className="button" onClick={onSubmit}>{title}</button>
        </div>
    );
}
 
export default Button;