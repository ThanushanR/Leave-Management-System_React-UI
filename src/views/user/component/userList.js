import React, { Component } from "react";
import { Table } from "react-bootstrap";

export default class UserList extends Component {
  state = {
    users: [
      { id: 1, empname: "Betsy", email: "betsy@gmail.com" },
      { id: 2, empname: "Sinthuja", email: "sinthuja@gmail.com" },
      { id: 3, empname: "Priyanga", email: "priyanga@gmail.com" },
      { id: 4, empname: "cxvxcvx", email: "priyanga@gmail.com" }
    ]
  };

  render() {
    const { users } = this.state;
    return (
      <Table class="table table-striped table-hover card-text">
        <thead>
          <tr>
            <th>User Id</th>
            <th>Employee Name</th>
            <th>Email</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {users.map(({ id, empname, email }) => (
            <tr key={id}>
              <td>{id}</td>
              <td>{empname}</td>
              <td>{email}</td>
              <td> &nbsp; &nbsp;
                        <button type="submit" class="btn btn-success btn-circle" data-toggle="tooltip" 
                        data-placement="bottom" title="Accept" ><i class="fas fa-check"></i></button>
                        &nbsp; &nbsp;
                        <button type="submit" class="btn btn-danger btn-circle" size="lg-6" data-toggle="tooltip" 
                        data-placement="bottom" title="Reject" onClick={this.handleShow}><i class="fas fa-times"></i></button>
                        </td>
            </tr>
          ))}
        </tbody>

        <nav aria-label="Page navigation example">
          <ul class="pagination -content-end">
            <li class="page-item disabled">
              <a class="page-link" href="#" tabindex="-1">
                Previous
              </a>
            </li>
            <li class="page-item">
              <a class="page-link" href="#">
                1
              </a>
            </li>
            <li class="page-item">
              <a class="page-link" href="#">
                2
              </a>
            </li>
            <li class="page-item">
              <a class="page-link" href="#">
                3
              </a>
            </li>
            <li class="page-item">
              <a class="page-link" href="#">
                Next
              </a>
            </li>
          </ul>
        </nav>
      </Table>
    );
  }
}
