import React, { Component } from "react";
import { Field, reduxForm } from "redux-form";

class StreamForm extends Component {
  renderInput = ({ meta, input, label }) => {
    const className = `field ${meta.error && meta.touched ? "error" : ""}`;
    const errLable = meta.error && meta.touched ? meta.error : label;
    return (
      <div className={className}>
        <label>{errLable}</label>
        <input {...input} autoComplete="off" />
      </div>
    );
  };
  onSubmit = (formValues) => {
    this.props.onSubmit(formValues);
  };
  render = () => {
    return (
      <form
        className="ui form error"
        onSubmit={this.props.handleSubmit(this.onSubmit)}
      >
        <Field name="title" component={this.renderInput} label="Title" />
        <Field name="descp" component={this.renderInput} label="Description" />
        <button className="ui button secondary">Submit</button>
      </form>
    );
  };
}

const validate = (formVals) => {
  const errors = {};
  if (!formVals.title) {
    errors.title = "Enter a title";
  }
  if (!formVals.descp) {
    errors.descp = "Enter a description";
  }
  return errors;
};
export default reduxForm({
  form: "streamForm",
  validate,
})(StreamForm);
