import React, { Component } from "react";
import {
  Table,
  Button,
  ModalBody,
  Modal,
  Tooltip,
  Popover,
  Form,
  Col,
  Thead,
  Tbody

} from "react-bootstrap";
import RequestLieuLeaveData from "../../components/leave-system/lieu-request-data";

export default class LieuLeave extends Component {
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

  render() {
    const popover = (
      <Popover id="modal-popover" title="popover">
        very popover. such engagement
      </Popover>
    );
    const tooltip = <Tooltip id="modal-tooltip">wow.</Tooltip>;

    return (
      <div>
        <Modal show={this.state.show} onHide={this.handleClose}>
          <Modal.Header>
            <Modal.Title>Lieu Leave Request Form</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form>
              <Form.Row>
                <Form.Group as={Col} controlId="startdate">
                  <Form.Label>Start Date : </Form.Label>
                  <Form.Control type="date" />
                </Form.Group>

                <Form.Group as={Col} controlId="enddate">
                  <Form.Label>End Date : </Form.Label>
                  <Form.Control type="date" />
                </Form.Group>
              </Form.Row>

              <Form.Group as={Col} controlId="days">
                <Form.Label>No Of Days :</Form.Label>
                <Form.Control readOnly />
              </Form.Group>

              <Form.Row>
                <Form.Group as={Col} controlId="exampleForm.ControlTextarea1">
                  <Form.Label>Reason</Form.Label>
                  <Form.Control as="textarea" rows="2" />
                </Form.Group>
              </Form.Row>

            </Form>
          </Modal.Body>
          <Modal.Footer>
            <button
              type="submit"class="btn btn-danger "data-toggle="tooltip"data-placement="bottom"title="close" onClick={this.handleClose}>
              Close
            </button>
            <button
              type="submit"class="btn  btn-successRequest "data-toggle="tooltip"data-placement="bottom" title="request">
              Request
            </button>
          </Modal.Footer>
        </Modal>

        <section class="py-3">
          <div class="d-flex flex-row-reverse ">
            <button type="submit" class="btn btn-successRequest" data-toggle="tooltip"  data-placement="bottom" title="request"onClick={this.handleShow}>
              Request Lieu Leave</button>
          </div>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

          <div class="col-lg-12 mt-2 mb-2">
                <RequestLieuLeaveData startDate="2019-05-29" endDate="2019-05-30" noOfDays="05" approvedBy="Sinthuya" reason="Defect Fixed"/>
                <RequestLieuLeaveData startDate="2019-05-29" endDate="2019-05-30" noOfDays="04" approvedBy="Betsy" reason="Requirement Gathering yuihiioj ughijh ugihi gui guhij"/>
                <RequestLieuLeaveData startDate="2019-05-29" endDate="2019-05-30" noOfDays="03" approvedBy="Betsy" reason="Over Time"/>
            </div>
        </section>
      </div>
    );
  }
}

