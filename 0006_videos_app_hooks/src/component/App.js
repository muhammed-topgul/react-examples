import React, {Component, useEffect, useState} from 'react';
import SearchBar from "./SearchBar";
import youtube from "../service/youtube";
import VideoList from "./VideoList";
import VideoDetail from "./VideoDetail";

const App = () => {

    const [videos, setVideos] = useState([]);
    const [selectedVideo, setSelectedVideo] = useState(null);

    useEffect(() => {
        callbackSearchSubmit('React JS Tutorials')
    }, []);

    const callbackSearchSubmit = async (term) => {
        const response = await youtube.get('/search', {
            params: {
                q: term
            }
        });

        setVideos(response.data.items);
        setSelectedVideo(response.data.items[0]);
    }

    const callbackVideoSelect = (video) => {
        setSelectedVideo(video);
    }

    return (
        <div className={"ui container"}>
            <SearchBar callbackSearchSubmit={callbackSearchSubmit}/>
            <div className={"ui grid"}>
                <div className={"ui row"}>
                    <div className={"eleven wide column"}>
                        <VideoDetail selectedVideo={selectedVideo}/>
                    </div>
                    <div className={"five wide column"}>
                        <VideoList callbackVideoSelect={callbackVideoSelect} videos={videos}/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;