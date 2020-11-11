import React from 'react';
import {YOUTUBE_VIDEO_SRC} from "../common/env";

const VideoDetail = ({selectedVideo}) => {

    if (!selectedVideo) {
        return <div>Loading...</div>
    } else {
        return (
            <div>
                <div className={"ui embed"}>
                    <iframe title={"video player"} src={`${YOUTUBE_VIDEO_SRC}/${selectedVideo.id.videoId}`}/>
                </div>
                <div className={"ui segment"}>
                    <h4 className={"ui header"}>{selectedVideo.snippet.title}</h4>
                    <p>{selectedVideo.snippet.description || 'Youtube video for you'}</p>
                </div>
            </div>
        );
    }
};

export default VideoDetail;