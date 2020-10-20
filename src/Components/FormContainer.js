import React, { Component } from "react";
import Form from "./Form";

class FormContainer extends Component {
  constructor() {
    super();
    this.state = {
      address: "",
      startTime: "",
      endTime: "",
      mileage: "",
      numResp: "",
      prioritize: "",
      order: "",
      units: "",
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  }

  render() {
    return <Form handleChange={this.handleChange} data={this.state} />;
  }
}

export default FormContainer;
