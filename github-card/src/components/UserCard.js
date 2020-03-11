import React from 'react';

let UserCard = props => {
    console.log('inside user props', props)
    return (
        <div className='usercard-body'>
            {props.followersCard.map(follower => (
                <div className='user-card'>
                    <h2>{follower.login}</h2>
                    <a>{follower.html_url}</a>
                </div>
            ))}
        </div>
    )
}

export default UserCard;