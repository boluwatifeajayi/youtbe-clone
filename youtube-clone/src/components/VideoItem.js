import React from 'react';



const VideoItem = ({video, onVideoSelect}) =>{
    return(
        
            <div onClick={() => onVideoSelect(video)}>
                <img  alt="thumbnail" src={video.snippet.thumbnails.medium.url}/>
                <p><b>{video.snippet.title}</b></p>
            </div>
        
    )
    
}

export default VideoItem;