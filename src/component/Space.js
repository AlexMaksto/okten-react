import React, {useEffect, useState} from 'react';
import SpaceComponent from "./SpaceComponent";

const Space = () => {
    const [spaces, setSpaces] = useState();

    useEffect(() => {
        fetch('https://api.spacexdata.com/v3/launches/')
            .then((res) => res.json())
            .then((spaces) => setSpaces(spaces))
            .catch(e => console.log(e));
    }, [])

    return (
        <>
            {spaces
                ?.filter(item => !item.launch_year.includes(2020))
                .map((space, id) => {
                    return (
                        <SpaceComponent
                            key={id}
                            space={space}
                        />)
                })}
        </>
    );
};

export default Space;