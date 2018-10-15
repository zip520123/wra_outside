import React, { Component } from 'react';
class YoutubeFrame extends Component {
    render(){
        const videoId = this.props.videoId
        console.log(videoId)
        const src = `https://www.youtube.com/embed/${videoId}?loop=1&amp;playlist=${videoId}`;
        return (
        <iframe title={videoId} width="560" height="315" src={src} frameBorder="0" allowFullScreen></iframe>
        );
    }
}
export default YoutubeFrame;