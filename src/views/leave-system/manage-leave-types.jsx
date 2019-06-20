import React, { Component } from 'react'

export default class ManageLeaveTypes extends Component {
    render() {
        return (
            <div>
               <section class="py-3">
            <div class="row"></div>
            <div class="col-lg-12 mb-4">
            <div class="card">
              <div class="card-header">
                <h6 class="text-uppercase mb-0">Manage Leave Types</h6>
              </div>
              <div class="card-body">                           
                <table class="table table-striped table-hover card-text">
                  <thead>
                    <tr> 
                      <th>Leave Type ID</th>
                      <th>Leave Type</th>
                      <th>Allocated Days</th>
                     
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>1</td>
                      <td>Casual</td>
                      <td>30</td>
                    </tr>
                    <tr>
                      <td>2</td>
                      <td>Annual</td>
                      <td>15</td>
                    </tr>
                    <tr>
                      <td>3</td>
                      <td>Medical</td>
                      <td>15</td>
                    </tr>
                  
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          </section> 
            </div>
        )
    }
}
