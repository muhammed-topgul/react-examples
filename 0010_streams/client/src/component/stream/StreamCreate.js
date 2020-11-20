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

    renderInput({input, label, meta}) {
        return (
            <div className={'field'}>
                <label>{label}</label>
                <input {...input}/>
                <div>{meta.error}</div>
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

const validate = (formValues) => {
    const errors = {};

    if (!formValues.title) {
        errors.title = 'You must enter a title';
    }

    if (!formValues.description) {
        errors.description = 'You must enter a description';
    }

    return errors;
}

export default reduxForm({form: 'streamCreateForm', validate})(StreamCreate);