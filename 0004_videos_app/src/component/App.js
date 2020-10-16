import React, {Component} from 'react';
import SearchBar from "./SearchBar";
import youtube from "../service/youtube";
import VideoList from "./VideoList";
import VideoDetail from "./VideoDetail";

class App extends Component {

    state = {
        videos: [],
        selectedVideo: null
    }

    callbackSearchSubmit = async (term) => {
        const response = await youtube.get('/search', {
            params: {
                q: term
            }
        });

        this.setState({
            videos: response.data.items,
            selectedVideo: response.data.items[0]
        });
    }

    callbackVideoSelect = (video) => {
        this.setState({
            selectedVideo: video
        });
    }

    componentDidMount() {
        this.callbackSearchSubmit('React JS Tutorials')
    }

    render() {
        return (
            <div className={"ui container"}>
                <SearchBar callbackSearchSubmit={this.callbackSearchSubmit}/>
                <div className={"ui grid"}>
                    <div className={"ui row"}>
                        <div className={"eleven wide column"}>
                            <VideoDetail selectedVideo={this.state.selectedVideo}/>
                        </div>
                        <div className={"five wide column"}>
                            <VideoList callbackVideoSelect={this.callbackVideoSelect} videos={this.state.videos}/>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;