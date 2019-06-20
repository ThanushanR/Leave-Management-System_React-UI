import React, { Component } from "react";
import { Modal, Form, Col } from "react-bootstrap";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction"; // needed for dayClick

import "@fullcalendar/core/main.css";
import "@fullcalendar/daygrid/main.css";
import ApplyLeaveForm from "./apply-leave-form";

export default class ModalCalendar extends Component {
  handleClose = () => {
    this.setState({ show: false });
  };

  handleShow = (arg) => {
    this.setState({ 
      show: true,
      modalStartDate:arg.dateStr
     });
  };

  calendarComponentRef = React.createRef();

  state = {
    show: false,
    modalStartDate:null,
    calendarWeekends: true,
    calendarEvents: [
      // initial event data
      { title: "Event Now", start: new Date() }
    ]
  };

  handleDateClick = arg => {
    // bind with an arrow function
    this.handleShow(arg);
  };

  render() {
    return (
      <div>
        <Modal  size="lg" show={this.state.show} onHide={this.handleClose}>
          <Modal.Header>
            <Modal.Title>Apply leave</Modal.Title>
          </Modal.Header>
          <Modal.Body>
          <ApplyLeaveForm startdate={this.state.modalStartDate}/>
          </Modal.Body>
        </Modal>

        <FullCalendar
          defaultView="dayGridMonth"
          header={{
            left: "prev,next today",
            center: "title",
            right: "dayGridMonth"
          }}
          plugins={[dayGridPlugin, interactionPlugin]}
          ref={this.calendarComponentRef}
          weekends={this.state.calendarWeekends}
          events={this.state.calendarEvents}
          dateClick={this.handleDateClick}
        />
      </div>
    );
  }
}
