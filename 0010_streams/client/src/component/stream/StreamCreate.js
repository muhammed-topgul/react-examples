import React, {Component} from 'react';

// REDUX FORM
import {Field, reduxForm} from "redux-form";

class StreamCreate extends Component {

    // renderInput(formProps) {
    //     return (
    //         <input
    //             onChange={formProps.input.onChange}
    //             value={formProps.input.value}/>
    //     )
    // }

    renderInput({input}) {
        return <input {...input}/>
    }

    render() {
        return (
            <form>
                <Field name={'title'} component={this.renderInput}/>
                <Field name={'description'} component={this.renderInput}/>
            </form>
        );
    }
}

export default reduxForm({form: 'streamCreateForm'})(StreamCreate);