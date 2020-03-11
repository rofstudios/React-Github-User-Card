import React from 'react';

let MyCard = props => {
    return (
        <div className='mycard-body'>
            <h2>{props.myCard.name}</h2>
            <p>{props.myCard.login}</p>
            <p>{props.myCard.followers}</p>
            <p>{props.myCard.following}</p>
        </div>
    )
}

export default MyCard;