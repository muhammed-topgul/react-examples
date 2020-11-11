import React, {Component, useEffect, useState} from 'react';
import SearchBar from "./SearchBar";
import youtube from "../service/youtube";
import VideoList from "./VideoList";
import VideoDetail from "./VideoDetail";
import useVideo from "../hooks/useVideo";

const App = () => {

    const [selectedVideo, setSelectedVideo] = useState(null);
    const [videos, search] = useVideo('React JS Tutorial');

    useEffect(() => {
        setSelectedVideo(videos[0]);
    }, [videos]);

    const callbackVideoSelect = (video) => {
        setSelectedVideo(video);
    }

    return (
        <div className={"ui container"}>
            <SearchBar callbackSearchSubmit={search}/>
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