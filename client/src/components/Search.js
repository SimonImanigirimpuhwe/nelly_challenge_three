import React from 'react';
import Button from './Button';

const SearchInput = ({onSubmit, onChange, error}) => {
    return ( 
        <div className="container">
            <div className="input_wrapper">
                <div className="search_wrapper">
                    <input className="input" placeholder="Search album by id" onChange={(e) =>onChange(e.target)}/>
                    <span><i className="fa fa-search" aria-hidden="true"></i></span>
                </div>
                {error && <p className="error">{error}</p>}
            </div>
            <div className="btn_div">
                <Button title="Get Album Photos By Id" onSubmit={onSubmit}/>
            </div>
        </div>
     );
}
 
export default SearchInput;