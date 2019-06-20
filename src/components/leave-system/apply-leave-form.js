import React, { Component } from "react";

import { Form, Col, Button } from "react-bootstrap";
export default class ApplyLeaveForm extends Component {
  render() {
    return (
      <div>
        <Form>
          <Form.Row>
            <Form.Group as={Col} controlId="startdate">
              <Form.Label>Start Date : </Form.Label>
              <Form.Control type="date" value={this.props.startdate} />
            </Form.Group>

            <Form.Group as={Col} controlId="enddate">
              <Form.Label>End Date : </Form.Label>
              <Form.Control type="date" />
            </Form.Group>

            <Form.Group as={Col} controlId="days">
              <Form.Label>No Of Days :</Form.Label>
              <Form.Control readOnly />
            </Form.Group>
          </Form.Row>
          <Form.Row>
            <Form.Group as={Col} controlId="leavetype">
              <Form.Label>Leave type :</Form.Label>
              <Form.Control as="select">
                <option disabled>Select Leave Type</option>
                <option>Anual Leave</option>
              </Form.Control>
            </Form.Group>

            <Form.Group as={Col} controlId="formGridCity">
              <Form.Label>&nbsp;</Form.Label>
              <Form.Control type="file" />
            </Form.Group>
          </Form.Row>
          <Form.Row>
            <Form.Group as={Col} controlId="exampleForm.ControlTextarea1">
              <Form.Label>Reason</Form.Label>
              <Form.Control as="textarea" rows="2" />
            </Form.Group>
          </Form.Row>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </div>
    );
  }
}
