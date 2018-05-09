import React, { Component } from 'react';

import Navbar from './components/navbar'
import VideoThumb from './components/video-thumb'

class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
          <div style={{width: '300px', height: '200px',}}>
            <VideoThumb url="https://cdn-images-1.medium.com/max/800/1*0te_tttSd-oWbW4v1wHXEw.jpeg"/>
          </div>
      </div>
    )
  }
}

export default App
