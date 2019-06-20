import React, { Component } from "react";
import LeaveCalanderView from '../../components/leave-system/leave-calander-view';
import LeaveSummary from '../../components/leave-system/leave-summary';
import LeaveSummaryYear from '../../components/leave-system/leave-summary-for-year';

class ManageLeaveDashBoard extends Component{
   

   
    render(){
        return(
            
          
            <section class="py-5">
            <nav>
        <div class="nav nav-pills flex-column flex-sm-row" id="nav-tab" role="tablist">
          <a class="flex-sm-fill text-sm-center nav-link active" id="nav-home-tab" data-toggle="tab" href="#nav-home" role="tab" aria-controls="nav-home" aria-selected="true">Calander View</a>
          <a class="flex-sm-fill text-sm-center nav-link" id="nav-contact-tab" data-toggle="tab" href="#nav-contact" role="tab" aria-controls="nav-contact" aria-selected="false">Leave Summary</a>
          <a class="flex-sm-fill text-sm-center nav-link" id="nav-cancelled-tab" data-toggle="tab" href="#nav-cancelled" role="tab" aria-controls="nav-contact" aria-selected="false">Leave Summary for year</a>
        </div>
      </nav>

      <div class="tab-content" id="nav-tabContent">
         <div class="tab-pane fade show active" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab">
             <div class="d-flex justify-content-center">
                 <section class="py-5">
             <LeaveCalanderView/>
             </section>
             </div>
             </div> 
         
         <div class="tab-pane fade" id="nav-contact" role="tabpanel" aria-labelledby="nav-contact-tab"><LeaveSummary /></div> 
         <div class="tab-pane fade" id="nav-cancelled" role="tabpanel" aria-labelledby="nav-contact-tab"><LeaveSummaryYear  /></div> 
      </div>

               
            <div>
                
                
            </div>
            </section>
        )
    }
}
export default ManageLeaveDashBoard;