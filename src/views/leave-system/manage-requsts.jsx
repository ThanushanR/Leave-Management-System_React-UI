import React, { Component } from "react";
import ManageCancelLeaveRequests from "./manage-cancel-leave-request";
import ManageLeaveRequests from "./manage-leave-requests";


class ManageRequest extends Component {
  render() {
    return (
        <section class="py-5">
       
       <nav>
        <div class="nav nav-pills flex-column flex-sm-row" id="nav-tab" role="tablist">
        <a class="flex-sm-fill text-sm-center nav-link active" id="nav-home-tab" data-toggle="tab" href="#nav-home"
         role="tab" aria-controls="nav-home" aria-selected="true">Leave Requests</a>
          <a class="flex-sm-fill text-sm-center nav-link" id="nav-profile-tab" data-toggle="tab" href="#nav-profile" 
          role="tab" aria-controls="nav-profile" aria-selected="false">Cancel Leave Request</a>
          </div>
          </nav>

        <div class="tab-content" id="nav-tabContent">
         <div class="tab-pane fade show active" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab"><ManageLeaveRequests /></div> 
        <div class="tab-pane fade" id="nav-profile" role="tabpanel" aria-labelledby="nav-profile-tab"><ManageCancelLeaveRequests /></div>
       </div>
</section>
    );
  }
}
export default ManageRequest;

 