import React, { Component } from 'react';
import './App.css';

import SearchBar from './components/SearchBar';
import VideoDetail from './components/VideoDetail';
import VideoList from './components/VideoList';
import Header from './components/Header';
//import VideoItem from './components/VideoItem';
import youtube from './api/youtube';

export class App extends Component {

    state = {
        videos: [],
        selectedVideo : null,
    }
    onVideoSelect = (video) =>{
        this.setState({selectedVideo: video});
    }
    handleSubmit = async (searchTerm) => {
        const response = await youtube.get('search', {
            params: {
                part: 'snippet',
                maxResults: 10,
                key: 'AIzaSyAwW52cbwYyY6aWVbtVHtS4EgkHUyTW6RQ',
                q: searchTerm,
            }
           
        });

        this.setState({videos: response.data.items, selectedVideo: response.data.items[0]});
    }
    render() {
        const{selectedVideo, videos} = this.state;
        return (
            <div>
             <Header/>
             <div className="containerr">
                    <SearchBar onFormSubmit={this.handleSubmit} />
                    <div className="row">
                        <div className="col-lg-9 cont">
                            <VideoDetail video={selectedVideo} />
                        </div>
                        <div className="col-lg-3 cont">
                            <VideoList videos={videos} onVideoSelect={this.onVideoSelect} />
                        </div>
                    </div>
                   
                    
             </div>
             
            </div>
        )
    }
}

export default App
