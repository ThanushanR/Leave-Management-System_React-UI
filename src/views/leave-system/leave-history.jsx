import React, { Component } from "react";
import LeaveData from "../../components/leave-system/leave-data";
import {getUserHistory} from '../../actions/leaveHistoryAction';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';



class LeaveHistory extends Component {
  
  render() {
    const {status} = this.props.status;

    return (
      <div>
        <section class="py-5">
          <div class="form-group d-flex justify-content-end">
            <label class="py-2">
              Search Leave by Status : 
            </label>
            <div class="col-sm-3">
              <select
                data-filter="make"
                class="filter-make filter form-control"
              >
                <option>All History</option>
                <option>Accepted</option>
                <option>Rejected</option>
                <option>Canceled</option>
                <option>Pending</option>
              </select>
            </div>
          </div>
        </section>

        <div class="col-lg-12 mb-2">
          {status.map(({startDate,endDate,status,reason})=>( <LeaveData
            startDate={startDate}
            endDate={endDate}
            status={status}
            reason={reason}
          />))}
        
        </div>
      </div>
    );
  }
}
LeaveHistory.propTypes={
  getUserHistory:PropTypes.func.isRequired,
  status:PropTypes.object.isRequired
}
const mapStateToProps=(state)=>({
  status:state.status
})
export default connect(mapStateToProps,{getUserHistory})(LeaveHistory);