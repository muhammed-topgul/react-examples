import React from 'react';
import VideoItem from "./VideoItem";

const VideoList = ({videos, callbackVideoSelect}) => {

    const videoItemList = videos.map(video => {
        return <VideoItem callbackVideoSelect={callbackVideoSelect} video={video} key={video.etag}/>
    });

    return (
        <div className={"ui relaxed divided list"}>
            {videoItemList}
        </div>
    );
};

export default VideoList;