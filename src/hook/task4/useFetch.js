import {useEffect, useState} from "react";
import {usersService} from "../../services/task4/usersService";
import {postsService} from "../../services/task4/postsService";
import {commentsService} from "../../services/task4/commentsService";

const useFetch = (endpoint) => {
    const [result, setResult] = useState([])

    useEffect(() => {
        switch (endpoint) {
            case 'users' :
                usersService.getAll()
                    .then(({data}) => setResult(data))
                break;
            case 'posts' :
                postsService.getAll()
                    .then(({data}) => setResult(data))
                break;
            case 'comments' :
                commentsService.getAll()
                    .then(({data}) => setResult(data))
                break;
        }

    }, [endpoint]);

    return result;
}

export {
    useFetch
}