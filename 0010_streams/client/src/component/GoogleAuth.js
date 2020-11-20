import React, {Component} from 'react';
import {ClientId} from "../common/env";

// REDUX SETTING
import {connect} from 'react-redux';
import {signIn, signOut} from "../action";

class GoogleAuth extends Component {

    state = {
        isSignedIn: null
    }

    componentDidMount() {
        window.gapi.load('client:auth2', () => {
            window.gapi.client.init({
                clientId: ClientId,
                scope: 'email'
            }).then(() => {
                this.auth = window.gapi.auth2.getAuthInstance();
                console.log(this.auth)
                this.setState({
                    isSignedIn: this.auth.isSignedIn.get()
                });

                // bu bir listener fonksiyon
                // auth durumu her degistiginde calisir
                this.auth.isSignedIn.listen(this.onAuthChange);
            });
        });
    }

    onAuthChange = (isSignedIn) => {
        if (isSignedIn) {
            this.props.signIn();
        } else {
            this.props.signOut();
        }
    }

    onSignInClick = () => {
        this.auth.signIn();
    }

    onSignOutClick = () => {
        alert('sign out')
        this.auth.signOut();
    }

    renderAuthButton() {
        if (this.state.isSignedIn === null) {
            return null;
        } else if (this.state.isSignedIn) {
            return (
                <button className={'ui red google button'} onClick={this.onSignOutClick}>
                    <i className={'google icon'}/>
                    Sign Out
                </button>
            );
        } else {
            return (
                <button className={'ui primary google button'} onClick={this.onSignInClick}>
                    <i className={'google icon'}/>
                    Sign In with Google
                </button>
            );
        }
    }

    render() {
        return (
            <div>
                {this.renderAuthButton()}
            </div>
        );
    }
}

export default connect(null, {signIn, signOut})(GoogleAuth);
