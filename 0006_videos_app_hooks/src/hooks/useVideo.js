import {useEffect, useState} from "react";
import youtube from "../service/youtube";

const useVideo = (defaultSearchTerm) => {

    const [videos, setVideos] = useState([]);

    useEffect(() => {
        search(defaultSearchTerm);
    }, [defaultSearchTerm]);

    const search = async (term) => {
        const response = await youtube.get('/search', {
            params: {
                q: term
            }
        });

        setVideos(response.data.items);
    }

    return [videos, search]
}

export default useVideo;