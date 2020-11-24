import Lifecycle from "./Lifecycle";
import React from "react";

class App extends React.Component {

    state = {
        random: 0
    }

    onClick = () => {
        const min = 1;
        const max = 100;
        const rand = min + Math.random() * (max - min);
        this.setState({ random: this.state.random + rand });
    }

    render() {
        return (
            <div>
                <button onClick={this.onClick}>Change Props</button>
                <Lifecycle random={this.state.random}/>
            </div>
        );
    }
}

export default App;
