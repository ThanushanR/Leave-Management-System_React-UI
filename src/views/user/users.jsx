import React, { Component } from "react";
import UserList from "./component/userList";
import UserModal from "./component/userModal";


export default class Users extends Component {
  

  render() {
  

    return (
      <section class="py-3">
        <div class="card">
          <div class="d-flex justify-content-between card-header">
            <h3 class="h6 text-uppercase mb-0">User Role</h3>
           <UserModal />
          </div>
          <div class="card-body">
            <UserList />
          </div>
        </div>
      </section>
    );
  }
}
