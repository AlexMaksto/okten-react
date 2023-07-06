import React from 'react';

const SpaceComponent = (props) => {

    const {space} = props;

    return (
        <div>
            <p>{space.mission_name}</p>
            <p>{space.launch_year}</p>
            <img src={space.links.mission_patch_small} alt={space.mission_name}/>
        </div>
    );
};

export default SpaceComponent;