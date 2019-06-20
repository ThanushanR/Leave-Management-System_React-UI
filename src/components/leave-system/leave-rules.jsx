import React, { Component } from 'react'
import CreditCard from '../../commons/credit-card';
const leaveRules = [
    {
        leavetype:"Anual Leave",
        policy:[
        "should apply before 2 weeks",
        "Hence employee is not entitled to annual leave on the first year of employment.",
        "Between January 1 and March 31 of the previous year 	– 14 days",
        "Between April 1 and June 30 of the previous year		 – 10 days",
        "Between July 1 and September 30 of the previous year 	– 7 days",
        "Between October 1 and December 31 of the previous year – 4 days"
    ]
    },
    {
        leavetype:"Casual Leave",
        policy:[
            "On the first year of employment, the employee is entitled to one casual leave for every two complete months of service.",
            "The second year onwards the employee will be eligible for 7 days of casual leave"
        ]
    },
    {
        leavetype:"Leiu Leave",
        policy:["IF an employee is requested by the management to work on a holiday he is eligible to apply for a lieu leave. (half day or full)",
            "employee should request the HR with the approval of the dept. head or management, reason and duration."
        ]
    },
    {
        leavetype:"Medical Leave",
        policy :["There is no common allocation of medical leave. But In case of medical needs",
        " the employee is given medical leave (more than 3 days for the required period with valid medical  proof."
        ]
    }
]
export default class LeaveRules extends Component {

    render() {
        let leaveRuleCard=leaveRules.map(rule=>{
            return(

                <CreditCard  title={rule.leavetype} rule={rule.policy}/>
            )
        })
        return (
            <div className="col-lg-12 d-flex justify-content">
                    {leaveRuleCard}
            </div>
        )
    }
}
