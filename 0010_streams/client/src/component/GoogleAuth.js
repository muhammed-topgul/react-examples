import React, {Component} from 'react';
import {ClientId} from "../common/env";

// REDUX SETTING
import {connect} from 'react-redux';
import {signIn, signOut} from "../action";

class GoogleAuth extends Component {

    componentDidMount() {
        window.gapi.load('client:auth2', () => {
            window.gapi.client.init({
                clientId: ClientId,
                scope: 'email'
            }).then(() => {
                this.auth = window.gapi.auth2.getAuthInstance();

                // redux store' a guncellemek icin
                this.onAuthChange(this.auth.isSignedIn.get());

                // bu bir listener fonksiyon
                // auth durumu her degistiginde calisir
                this.auth.isSignedIn.listen(this.onAuthChange);
            });
        });
    }

    onAuthChange = (isSignedIn) => {
        if (isSignedIn) {
            this.props.signIn(this.auth.currentUser.get().getId());
        } else {
            this.props.signOut();
        }
    }

    onSignInClick = () => {
        this.auth.signIn();
    }

    onSignOutClick = () => {
        this.auth.signOut();
    }

    renderAuthButton() {
        if (this.props.isSignedIn === null) {
            return null;
        } else if (this.props.isSignedIn) {
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

const mapStateToProps = (state) => {
    return {
        isSignedIn: state.auth.isSignedIn,
        userId: state.auth.userId
    }
}

export default connect(mapStateToProps, {signIn, signOut})(GoogleAuth);
