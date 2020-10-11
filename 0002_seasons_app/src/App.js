import React from "react";
import SeasonDisplay from "./component/SeasonDisplay";
import Spinner from "./common/Spinner";

class App extends React.Component {

    state = {
        lat: null,
        lng: null,
        errorMessage: ''
    }

    componentDidMount() {
        window.navigator.geolocation.getCurrentPosition(
            (position) => {
                this.setState({
                    lat: position.coords.latitude,
                    lng: position.coords.longitude
                })
            },
            (error) => {
                this.setState({
                    errorMessage: error.message
                });
            }
        );
    }

    render() {
        if (this.state.errorMessage && !this.state.lat && !this.state.lng) {
            return <div>Error: {this.state.errorMessage}</div>
        } else if (!this.state.errorMessage && this.state.lat && this.state.lng) {
            return (
                <SeasonDisplay lat={this.state.lat}/>
            )
        } else {
            return (<Spinner message={"Please accept location request"}/>)
        }

    }
}

export default App;