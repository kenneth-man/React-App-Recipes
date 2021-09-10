import React from 'react';

const InfoItem = ({ aisle, image, name }) => {
    return (
        <div className='infoItem col' style={{backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(${image})`}}>
            <h2 style={{textTransform: 'uppercase', fontWeight: '900'}}>{name}</h2>
            <h2>{aisle}</h2>
        </div>
    )
}

export default InfoItem;