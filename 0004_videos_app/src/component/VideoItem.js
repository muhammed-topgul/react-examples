import React from 'react';

// css
import '../css/VideoItem.css';

const VideoItem = ({video, callbackVideoSelect}) => {
    return (
        <div onClick={() => callbackVideoSelect(video)} className={"video-item item"}>
            <img
                className={"ui image"}
                src={video.snippet.thumbnails.medium.url}
                alt={video.snippet.description}
            />
            <div className={"content"}>
                <div className={"header"}>
                    {video.snippet.title}
                </div>
            </div>
        </div>
    );
};

export default VideoItem;