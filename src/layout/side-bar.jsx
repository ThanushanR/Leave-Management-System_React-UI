import React, { Component } from "react";
import { Link } from 'react-router-dom';

class SideBar extends Component {
  render() {
    return (

      <div id="sidebar" class="sidebar py-3">
        <ul class="sidebar-menu list-unstyled">
          <li class="sidebar-list-item"><a href="index.html" class="sidebar-link text-muted"><i class="fas fa-home mr-3 text-gray"></i><span>Dashboard</span></a></li>

          <li class="sidebar-list-item"><a href="#" data-toggle="collapse" data-target="#page1" aria-expanded="false" aria-controls="page1" class="sidebar-link text-muted"><i class="fas fa-th-large mr-3 text-gray"></i><span>Leave</span></a>
            <div id="page1" class="collapse">
              <ul class="sidebar-menu list-unstyled border-left border-primary border-thick">
                <li class="sidebar-list-item"><Link to="/" class="sidebar-link text-muted pl-lg-5">Leave Dashboard</Link></li>
                <li class="sidebar-list-item"><Link to="/requestLeave" class="sidebar-link text-muted pl-lg-5">Request Leave</Link></li>
                <li class="sidebar-list-item"><Link to="/lieuLeave" class="sidebar-link text-muted pl-lg-5">Lieu Leave</Link></li>
                <li class="sidebar-list-item"><Link to="/leaveHistory" class="sidebar-link text-muted pl-lg-5">Leave History</Link></li>
                <li class="sidebar-list-item"><Link to="/carryforward" class="sidebar-link text-muted pl-lg-5">Carry Forward</Link></li>


              </ul>
            </div>
          </li>

          <li class="sidebar-list-item"><a href="#" data-toggle="collapse" data-target="#page2" aria-expanded="false" aria-controls="page2" class="sidebar-link text-muted"><i class="fas fa-list mr-3 text-gray"></i><span>Manage Leave</span></a>
            <div id="page2" class="collapse">
              <ul class="sidebar-menu list-unstyled border-left border-primary border-thick">
                <li class="sidebar-list-item"><Link to="/manageLeaveDashboard" class="sidebar-link text-muted pl-lg-5">Leave Dashboard</Link></li>
                <li class="sidebar-list-item"><Link to="/configleave" class="sidebar-link text-muted pl-lg-5">Leave Types & Policies</Link></li>
                <li class="sidebar-list-item"><Link to="/manageLeaveRequests" class="sidebar-link text-muted pl-lg-5">Leave Requests</Link></li>
                <li class="sidebar-list-item"><Link to="/manageLeaveLeiuLeave" class="sidebar-link text-muted pl-lg-5">Lieu Leave</Link></li>
                <li class="sidebar-list-item"><Link to="/manageCarryForward" class="sidebar-link text-muted pl-lg-5">Carry Forward</Link></li>
                <li class="sidebar-list-item"><Link to="/manageLeaveHistory" class="sidebar-link text-muted pl-lg-5">leave History</Link></li>

              </ul>
            </div>
          </li>
          <li class="sidebar-list-item"><a href="#" data-toggle="collapse" data-target="#page3" aria-expanded="false" aria-controls="page3" class="sidebar-link text-muted"><i class="fas fa-users-cog mr-3 text-gray"></i><span>Manage User</span></a>
            <div id="page3" class="collapse">
              <ul class="sidebar-menu list-unstyled border-left border-primary border-thick">
                <li class="sidebar-list-item"><Link to="/manageRole" class="sidebar-link text-muted pl-lg-5">Role</Link></li>
                <li class="sidebar-list-item"><Link to="/manageUser" class="sidebar-link text-muted pl-lg-5">User List</Link></li>
              </ul>
            </div>
          </li>

          <li class="sidebar-list-item"><a href="#" data-toggle="collapse" data-target="#page4" aria-expanded="false" aria-controls="page4" class="sidebar-link text-muted"><i class="fas fa-cogs  mr-3 text-gray"></i><span>Settings</span></a>
            <div id="page4" class="collapse">
              <ul class="sidebar-menu list-unstyled border-left border-primary border-thick">
                <li class="sidebar-list-item"><Link to="/configurecalendar" class="sidebar-link text-muted pl-lg-5">Configure Calendar</Link></li>
              </ul>
            </div>
          </li>
        </ul>

      </div>

    )
  }
}
export default SideBar;