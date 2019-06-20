import React, { Component } from "react";
import LeaveData from '../../components/leave-system/leave-data'
import ApplyCarryforwardLeave from "../../components/leave-system/apply-carryforward-leave";
import CreditCard from "../../commons/credit-card";
import LeaveRules from "../../components/leave-system/leave-rules";

class LeaveDashBoard extends Component{
   
 
    render(){
       
        
        return(
            <div>
            <div className="col-lg-12 mt-2 mb-2">
                <LeaveData startDate="2019-05-29" endDate="2019-05-30" status="pending" reason="got to colombo"/>
            </div>
                {/* <LeaveData AvilableDays = "10" endDate="2019-05-30" status="pending" reason="got to colombo"/> */}

                {/* <ApplyCarryforwardLeave/> */}
                    <div className="row">
                        <LeaveRules/>
                    </div>
                </div>
        )
    }
}
export default LeaveDashBoard;