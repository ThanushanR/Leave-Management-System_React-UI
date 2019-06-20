import React, { Component } from 'react'
import Card from "../../commons/card";

class ManageCarryForwardLeaveHistory extends Component {
    render() {
        return (
           //Carryforward leave History form
          <section class="py-3">
            <div class="row"></div>
            <div class="col-lg-12 mb-4">
            <div class="card">
              <div class="card-header">
                <h6 class="text-uppercase mb-0">Carryforward Leave History</h6>
              </div>
              <div class="card-body">                           
                <table class="table table-striped table-hover card-text">
                  <thead>
                    <tr> 
                      <th>Employee Name</th>
                      <th>Avilable Days</th>
                      <th>Requested Days</th>
                      <th>Valid Period</th>
                      <th>Reason</th>
                      <th>Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Mark</td>
                      <td>10</td>
                      <td>3</td>
                      <td>12.06.2019-15.06.2019</td>
                      <td></td>
                      <td style={{color: 'Green'}}>Accepted</td>
                    </tr>
                    <tr>
                      <td>Jacob</td>
                      <td>15</td>
                      <td>7</td>
                      <td>08.08.2020-15.08.2020</td>
                      <td>Sick</td>
                      <td style={{color: 'red'}}>Rejected</td>
                    </tr>
                    <tr>
                      <td>Larry</td>
                      <td>10</td>
                      <td>10</td>
                      <td>01.01.2020-10.01.2020</td>
                      <td></td>
                      <td style={{color: 'Green'}}>Accepted</td>
                    </tr>
                    <tr>
                      <td>Sam</td>
                      <td>4</td>
                      <td>2</td>
                      <td>23.12.2020-25.12.2020</td>
                      <td>Sick</td>
                      <td style={{color: 'red' }}>Rejected</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          </section>
        );
    }
}
export default ManageCarryForwardLeaveHistory;
