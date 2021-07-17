import React from 'react';


const Card = ({photo}) => {
    return ( 
        <div className="card">
            <img src={photo.thumbnailUrl} alt={photo.title} className="thumbnail"/>
            <p className="title">{photo.title}</p>
        </div>
     );
}
 
export default Card;