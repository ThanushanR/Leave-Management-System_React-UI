import React, { Component } from "react";

import UserRoleModal from "./component/userRoleModal";
import UserRoleList from "./component/userRoleList";

export default class Role extends Component {
  render() {
    return (
      <section class="py-3">
        <div class="card">
          <div class="d-flex justify-content-between card-header">
            <h3 class="h6 text-uppercase mb-0">User Role</h3>
           <UserRoleModal />
          </div>
          <div class="card-body">
            <UserRoleList />
          </div>
        </div>
      </section>
    );
  }
}
