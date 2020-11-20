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

    onFormSubmit(formValues) {
        console.log(formValues);
    }

    render() {
        return (
            <form
                className={'ui form'}
                onSubmit={this.props.handleSubmit(this.onFormSubmit)}>
                <Field
                    name={'title'}
                    component={this.renderInput}
                    label={'Enter Title'}/>
                <Field
                    name={'description'}
                    component={this.renderInput}
                    label={'Enter Description'}/>
                <button
                    className={'ui button primary'}>
                    Submit
                </button>
            </form>
        );
    }
}

export default reduxForm({form: 'streamCreateForm'})(StreamCreate);