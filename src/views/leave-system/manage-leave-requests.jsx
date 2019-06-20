import React, { Component } from "react";
import Card from "../../commons/card";
import {
  Modal,
  Popover,
  Form,
  Col,link
} from "react-bootstrap";
import { Link } from 'react-router-dom';
import ViewFullLeaveHistory from "../../components/leave-system/view-full-leave-details";
import LeaveRequest from "../../components/leave-system/leave-request";

class ManageLeaveRequests extends Component{
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
      const popover = (
        <Popover id="modal-popover" title="popover">
          very popover. such engagement
        </Popover>
      );
        return(
          <div>
            
             <Modal show={this.state.show} onHide={this.handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Reject Reason</Modal.Title>
          </Modal.Header>
          <Modal.Body>
          <Form>
                    <Form.Row>
                        <Form.Group as={Col} controlId="roleId">
                        <Form.Label>Reason </Form.Label>
                        <Form.Control type="text" />
                        </Form.Group>
                    </Form.Row>
                    
                    </Form>
          </Modal.Body>
          <Modal.Footer>
          <button type="submit" class="btn btn-danger " data-toggle="tooltip" data-placement="bottom"  onClick={this.handleClose}>Close</button>

            <button type="submit" class="btn btn-success " data-toggle="tooltip" data-placement="bottom"  onClick={this.handleClose}>Confirm</button>
          </Modal.Footer>
        </Modal>
            <section class="py-4">

          <LeaveRequest startDate='2019-05-4' endDate='2019-05-5' reason=' exam in university of jaffna' NoofDays='3' leaveType='Casual'/><br/>
          <LeaveRequest startDate='2019-05-4' endDate='2019-05-5' reason=' exam in university of jaffna' NoofDays='3' leaveType='Casual'/><br/>
          <LeaveRequest startDate='2019-05-4' endDate='2019-05-5' reason=' exam in university of jaffna' NoofDays='3' leaveType='Casual'/><br/>


          </section>
          </div>
        )
    }
}
export default ManageLeaveRequests;