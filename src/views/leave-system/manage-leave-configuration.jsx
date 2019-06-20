import React, { Component } from 'react'
import ManageLeaveTypes from './manage-leave-types';
import ManageLeavePolicy from './manage-leave-policy';

export default class LeaveConfiguration extends Component {
    render() {
        return (
   <div>
    <section class="py-3">
    
       <nav>
        <div class="nav nav-pills flex-column flex-sm-row" id="nav-tab" role="tablist">
        <a class="flex-sm-fill text-sm-center nav-link active" id="nav-home-tab" data-toggle="tab" href="#nav-home"
         role="tab" aria-controls="nav-home" aria-selected="true">Leave Types</a>
          <a class="flex-sm-fill text-sm-center nav-link" id="nav-profile-tab" data-toggle="tab" href="#nav-profile" 
          role="tab" aria-controls="nav-profile" aria-selected="false">Leave Policy</a>
          </div>
          </nav>

        <div class="tab-content" id="nav-tabContent">
         <div class="tab-pane fade show active" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab"><ManageLeaveTypes/></div> 
        <div class="tab-pane fade" id="nav-profile" role="tabpanel" aria-labelledby="nav-profile-tab"><ManageLeavePolicy/></div>
       </div>
      </section>
      </div>
  
        );
    }
}
{/* //export default LeaveConfiguration; */}