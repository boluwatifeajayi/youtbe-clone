import React from 'react';



const VideoDetail = ({video}) => {
    if(!video) return <div className="nothing">Search Something To start Using Watcher.</div>

    const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`
    return(
        <React.Fragment>
            <div>
            <iframe frameBorder="0" title="Video Player" src={videoSrc}/>
            </div>
            <div>
                <h3>{video.snippet.title} - {video.snippet.channelTitle}</h3>
                <h4>{video.snippet.channelTitle}</h4>
                <p>{video.snippet.description}</p>
            </div>
        </React.Fragment>
    )
}

export default VideoDetail;