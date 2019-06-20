import React, { Component } from "react";
import MetricPill from "../../commons/metric-pill";
import Card from "../../commons/card";
import ApplyLeaveForm from "../../components/leave-system/apply-leave-form";
import LeaveData from "../../components/leave-system/leave-data";
import ModalCalendar from "../../components/leave-system/ModalCalendarRequestLeave";

const leaveCounts = [
  { title: "Casual", total: 10, count: 3 },
  { title: "Annual", total: 8, count: 5 },
  { title: "Medical", total: 15, count: 13 },
  { title: "LieuLeave", total: 15, count: 7 }
];

class RequestLeave extends Component {
  constructor(props) {
    super(props);
    this.state = {
      leaveRequest: {
        ApprovedBy: null,
        startDate: null,
        endDate: null,
        status: null,
        reason: null
      }
    };
  }

  render() {
    let leavePill = leaveCounts.map(leaveCount => {
      return (
        <MetricPill
          title={leaveCount.title}
          total={leaveCount.total}
          count={leaveCount.count}
        />
      );
    });
    return (
      <section class="py-5">
        {/* <div class="col-lg-12 mb-2">
          <LeaveData
            startDate="2019-05-29"
            endDate="2019-05-30"
            status="pending"
            reason="got to colombo"
          />
        </div> */}


        <div
          class="nav nav-pills flex-column flex-sm-row"
          id="nav-tab"
          role="tablist"
        >
          <a
            class="flex-row-reverse-fill text-sm-center nav-link active"
            id="nav-home-tab"
            data-toggle="tab"
            href="#nav-home"
            role="tab"
            aria-controls="nav-home"
            aria-selected="true"
          >
            <i class="far fa-calendar-alt" />  &nbsp;&nbsp;  Calander View
            
          </a>

          <a
            class="flex-row-reverse-fill text-sm-center nav-link "
            id="nav-cancelled-tab"
            data-toggle="tab"
            href="#nav-cancelled"
            role="tab"
            aria-controls="nav-contact"
            aria-selected="false"
          >
            <i class="fas fa-user-clock" /> &nbsp;&nbsp;  Form View
          </a>
        </div>
        <div class="row">
          <div class="col-lg-9">
            <nav />

            <div class="tab-content" id="nav-tabContent">
              <div
                class="tab-pane fade show active"
                id="nav-home"
                role="tabpanel"
                aria-labelledby="nav-home-tab"
              >
                <div className="mt-3">
                <ModalCalendar />
                </div>
              </div>
              <div
                class="tab-pane fade"
                id="nav-cancelled"
                role="tabpanel"
                aria-labelledby="nav-contact-tab"
              >
               <div className="mt-3">
                <Card title="Leave Application Form">
                  <ApplyLeaveForm />
                </Card>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-3">{leavePill}</div>
        </div>
      </section>
    );
  }
}
export default RequestLeave;
