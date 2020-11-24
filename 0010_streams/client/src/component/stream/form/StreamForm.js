import React, {Component} from 'react';

// REDUX FORM
import {Field, reduxForm} from "redux-form";

// REDUX SETTING
import {connect} from 'react-redux';
import {createStream} from "../../../action";

class StreamFrom extends Component {

    // renderInput(formProps) {
    //     return (
    //         <input
    //             onChange={formProps.input.onChange}
    //             value={formProps.input.value}/>
    //     )
    // }

    renderInput = ({input, label, meta}) => {
        return (
            <div className={`field ${meta.error && meta.touched ? 'error' : ''}`}>
                <label>{label}</label>
                <input {...input} autoComplete={'off'}/>
                {this.renderError(meta)}
            </div>
        );
    }

    renderError({error, touched}) {
        // touched, kullanici eger input alaniyla etkilesime gecerse calisir
        // yani kullanici input alanina tikladi sonra bos birakip cikti
        // o zaman hata touched = true olur
        // bu ayarlama form yuklendiginde ekranda hatalar gozukmesin diye
        // UX baby :)
        if (touched && error) {
            return (
                <div className={'ui error message'}>
                    <div className={'header'}>{error}</div>
                </div>
            )
        }
    }

    onFormSubmit = (formValues) => {
        // console.log(formValues);
        // this.props.createStream(formValues);
        this.props.onFormSubmit(formValues);
    }

    render() {
        return (
            <form
                className={'ui form error'}
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

    if (!formValues.title || formValues.title.length < 5) {
        errors.title = 'You must enter a title';
    }

    if (!formValues.description) {
        errors.description = 'You must enter a description';
    }

    return errors;
}

const formWrapped = reduxForm({form: 'streamCreateForm', validate})(StreamFrom);

export default connect(null, {createStream})(formWrapped);
