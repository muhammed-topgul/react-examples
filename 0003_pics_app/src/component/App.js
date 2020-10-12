import React from "react";
import SearchBar from "./SearchBar";

class App extends React.Component {

    callbackOnSearchSubmit(term) {
        alert(term);
    }

    render() {
        return (
            <div className={"ui container"} style={{marginTop: '10px'}}>
                <SearchBar callbackOnSearchSubmit={this.callbackOnSearchSubmit}/>
            </div>
        );
    }
}

export default App;