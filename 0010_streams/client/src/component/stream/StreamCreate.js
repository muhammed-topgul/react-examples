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

    renderInput({input, label}) {
        return (
            <div className={'field'}>
                <label>{label}</label>
                <input {...input}/>
            </div>
        );
    }

    render() {
        return (
            <form className={'ui form'}>
                <Field name={'title'} component={this.renderInput} label={'Enter Title'}/>
                <Field name={'description'} component={this.renderInput} label={'Enter Description'}/>
            </form>
        );
    }
}

export default reduxForm({form: 'streamCreateForm'})(StreamCreate);