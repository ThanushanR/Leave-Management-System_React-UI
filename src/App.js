import React from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import SideBar from './layout/side-bar';
import Header from './layout/header';
import Footer from './layout/footer';
import LeaveDashboard from './views/leave-system/leave-dashboard';
import RequestLeave from './views/leave-system/leave-request';
import LeaveHistory from './views/leave-system/leave-history';
import LieuLeave from './views/leave-system/leave-lieu';
import Login from './layout/login';
import ManageLeaveDashBoard from './views/leave-system/manage-leave-dashboard';
import ManageLeaveLieu from './views/leave-system/manage-lieu-leave';
import ManageCarryforward from './views/leave-system/manage-carryforward';
import ManageLeaveHistory from './views/leave-system/manage-leave-history';
import ConfigureCalendar from './views/settings/configureCalendar';
import Role from './views/user/role';

import leaveConfiguration from './views/leave-system/manage-leave-configuration';
import ManageRequest from './views/leave-system/manage-requsts';
import ManageIndivitualLeaveHistory from './views/leave-system/manage-indivitual-leave-history';
import CarryForwardLeaveHistory from './components/leave-system/carry-forward-leave-history';

import {Provider} from 'react-redux';
import store from './store';
import Users from './views/user/users';

function App() {
  return (
    <Provider store={store}>
    <div>
      <Header />
      <div class="d-flex align-items-stretch">
        <SideBar />
        <div class="page-holder w-100 d-flex flex-wrap">
          <div class="container-fluid px-xl-5">

            <Switch>
              <Route exact path="/" component={LeaveDashboard} />
              <Route exact path="/requestLeave" component={RequestLeave} />
              <Route exact path="/leaveHistory" component={LeaveHistory} />
              <Route exact path="/lieuLeave" component={LieuLeave} />
              <Route exact path="/manageLeaveDashboard" component={ManageLeaveDashBoard} />
              <Route exact path="/manageLeaveRequests" component={ManageRequest} />
              <Route exact path="/manageLeaveLeiuLeave" component={ManageLeaveLieu} />
              <Route exact path="/manageCarryForward" component={ManageCarryforward} />
              <Route exact path="/manageLeaveHistory" component={ManageLeaveHistory} />
              <Route exact path="/configurecalendar" component={ConfigureCalendar} />
              <Route exact path="/manageRole" component={Role}/>
              <Route exact path="/manageUser" component={Users}/>
              <Route exact path="/configleave" component={leaveConfiguration}/>
              <Route exact path="/indivitualLeaveHistory" component={ManageIndivitualLeaveHistory}/>
            </Switch>

          </div>
          <Footer />
        </div>
      </div>
      {/* <Login/> */}
      </div>
      </Provider>
  );
}

export default App;
