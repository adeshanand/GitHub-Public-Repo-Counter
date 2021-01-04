import React from 'react';

const AvatarList = ({name, work}) => {
    return(
        <div className='avatarstyle ma4 bg-light-purple dib pa3 grow shadow-4 tc'>
            <img src={`https://joeschmoe.io/api/v1/${name}`} alt='Avatar'/>
            <h1>{name}</h1>
            <p>{work}</p>
        </div>
    )
}

export default AvatarList;