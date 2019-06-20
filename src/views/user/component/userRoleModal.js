import React, { Component } from "react";
import { Modal, Form,Col} from "react-bootstrap";

export default class UserRoleModal extends Component{
    constructor(props, context) {
        super(props, context);
    
        this.handleShow = this.handleShow.bind(this);
        this.handleClose = this.handleClose.bind(this);
    
        this.state = {
          show: false
        };
      }
    
      handleClose() {
        this.setState({ show: false });
      }
    
      handleShow() {
        this.setState({ show: true });
      }

      render(){
          return(
              <div>
         <button
              type="submit"
              class="btn btn-success btn"
              data-toggle="tooltip"
              data-placement="bottom"
              title="addUser"
              btn-align="right"
              onClick={this.handleShow}
            >
              Add User
            </button>

            <Modal show={this.state.show} onHide={this.handleClose}>
            <Modal.Header>
              <Modal.Title>Add New Role</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Form>
                <Form.Row>
                  <Form.Group as={Col} controlId="roleId">
                    <Form.Label>Role Id </Form.Label>
                    <Form.Control readOnly />
                  </Form.Group>
                </Form.Row>
                <Form.Row>
                  <Form.Group as={Col} controlId="exampleForm.ControlTextarea1">
                    <Form.Label>Role Name</Form.Label>
                    <Form.Control type="text" />
                  </Form.Group>
                </Form.Row>
              </Form>
            </Modal.Body>
            <Modal.Footer>
              <button
                type="submit"
                class="btn btn-danger "
                data-toggle="tooltip"
                data-placement="bottom"
                title="Accept"
                onClick={this.handleClose}
              >
                Close
              </button>
              <button
                type="submit"
                class="btn btn-success "
                data-toggle="tooltip"
                data-placement="bottom"
                title="Accept"
              >
                Add Role
              </button>
            </Modal.Footer>
          </Modal>
          </div>
          )
      }
}

