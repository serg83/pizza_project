import React, { Component } from "react";
import { Button, Form, FormGroup, Label, Input, FormText } from "reactstrap";
import axios from "axios";

class EmailForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      text: ""
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  async handleSubmit(event) {
    event.preventDefault();
    const { email, text } = this.state;

    const form = await axios.post("/api/form", {
      email,
      text
    });
  }

  render() {
    return (
      <div>
        <p>Email Form: Delivery</p>

        <Form onSubmit={this.handleSubmit}>
          <FormGroup>
            <Label for="email">Email: </Label>
            <Input
              type="email"
              name="email"
              id="Email"
              placeholder="Place your Email"
              onChange={this.handleChange}
            />
          </FormGroup>
          <br />
          <FormGroup>
            <Label for="comments">Comments:  </Label>
            <Input
              type="textarea"
              name="text"
              id="Text"
              onChange={this.handleChange}
            />
          </FormGroup>
          <br />
          <Button 
            style={{
              backgroundColor: "red",
              color: "white",
              fontSize: 24,
              borderRadius: 3
            }}
          >
            Place Order
          </Button>
        </Form>
      </div>
    );
  }
}
export default EmailForm;
