import React, {Component} from 'react';
import {connect} from 'react-redux';
import {fetchUser} from "../action";

class UserHeader extends Component {

    componentDidMount() {
       // this.props.fetchUser(this.props.userId);
    }

    render() {

        // bu kodu mapStateToProps methodunun icinde de yazabilirim
        // const user = this.props.users.find((user) => user.id === this.props.userId);

        const user = this.props.user;

        if (!user) {
            return null;
        }

        return (
            <div className={'header'}>
                {user.name}
            </div>
        );
    }
}

// bu fonksiyonun ikinci parametresi this.props' u ifade eder
const mapStateToProps = (state, thisProps) => {
    return {
        user: state.users.find((user) => user.id === thisProps.userId)
    }
}

export default connect(mapStateToProps)(UserHeader);