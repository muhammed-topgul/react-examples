import React from "react";
import SearchBar from "./SearchBar";
import {API_URL} from "../common/env";
import unsplash from "../service/unsplash";

class App extends React.Component {

    state = {
        images: []
    }

    callbackOnSearchSubmit = async (term) => {
        const response = await unsplash.get(`${API_URL}/search/photos`, {
            params: {query: term},
        });

        this.setState({
            images: response.data.results
        });
    }

    render() {
        return (
            <div className={"ui container"} style={{marginTop: '10px'}}>
                <SearchBar callbackOnSearchSubmit={this.callbackOnSearchSubmit}/>
                Found: {this.state.images.length} images
            </div>
        );
    }
}

export default App;