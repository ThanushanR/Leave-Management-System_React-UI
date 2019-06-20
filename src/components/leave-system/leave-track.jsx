import React, { Component } from "react";
import './Track.css';

class LeaveTrack extends Component {
  render() {
    return (
        <div class="row">
        <div class="col-md-12">
           
            <div >
            <ul class="timeline timeline-horizontal">
                <li class="timeline-item">
                    <div class="timeline-badge success"><i class="glyphicon glyphicon-check"></i></div>
                    <div class="timeline-panel">
                        <div class="timeline-heading">
                            <h4 class="timeline-title">Project Manager</h4>
                            <p><small class="text-muted"><i class="glyphicon glyphicon-time"></i> 11 hours ago via Twitter</small></p>
                        </div>
                        <div class="timeline-body">
                            <p>Accepted Request</p></div>
                    </div>
                </li>
                <li class="timeline-item">
                    <div class="timeline-badge danger"><i class="glyphicon glyphicon-check"></i></div>
                    <div class="timeline-panel">
                        <div class="timeline-heading">
                            <h4 class="timeline-title">HR Manager</h4>
                            <p><small class="text-muted"><i class="glyphicon glyphicon-time"></i> 11 hours ago via Twitter</small></p>
                        </div>
                        <div class="timeline-body">
                            <p>Pending Reaquest</p>  </div>
                    </div>
                </li>
                <li class="timeline-item">
                    <div class="timeline-badge danger"><i class="glyphicon glyphicon-check"></i></div>
                    <div class="timeline-panel">
                        <div class="timeline-heading">
                            <h4 class="timeline-title">Managing Director</h4>
                            <p><small class="text-muted"><i class="glyphicon glyphicon-time"></i> 11 hours ago via Twitter</small></p>
                        </div>
                        <div class="timeline-body">
                            <p>Pending Request</p> </div>
                    </div>
                </li>
                 </ul>
            </div>
        </div>
        </div>);
 
    }
}
export default LeaveTrack;
