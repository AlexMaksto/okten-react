import {useEffect, useState} from "react";
import {albumsService} from "../../services";
import {Album} from "./Album/Album";

const Albums = () => {
    let [album, setAlbums] = useState([]);

    useEffect(() => {
        albumsService.getAll()
            .then(({data}) => setAlbums(data))
    }, [])

    return (
        <div>
            {album.map(album => <Album key={album.id} album={album}/>)}
        </div>
    );
};

export {Albums};