import React, { Component } from 'react'
import Tracker from '../../commons/tracker';

export default class LeaveRequest extends Component {
    render() {

        return (
            <div class="row roundy py-3" style={{ backgroundColor: '#fff' }}>

                <div class="col-md-8">

                    <Tracker />

                </div>

                <div class="col-md-4" >
                    <div class='row'> <div class='col-md-5'>
                        <b >From :</b></div> <div class='col-md-7'>{this.props.startDate}</div> </div>

                    <div class='row'> <div class='col-md-5'>
                        <b >To :</b></div> <div class='col-md-7'>{this.props.endDate}  </div> </div>
                    <div class='row'> <div class='col-md-5'>
                        <b >No of Days :</b></div > <div class='col-md-7'>{this.props.NoofDays}&nbsp;Days</div> </div>
                    <div class='row'> <div class='col-md-5'>
                        <b >Leave Type :</b></div> <div class='col-md-7'>{this.props.leaveType} </div> </div>
                    <div class='row'> <div class='col-md-5'>
                        <b >Reason :</b></div> <div class='col-md-7'>{this.props.reason}</div> </div>
                    <div class='row'>
                        <div class='col-md-5'>
                            <b >Attachment :  </b>
                        </div>
                        <div class='col-md-7'>
                            <button class="btn btn-secondary  btn-circle"><i class='far fa-eye' ></i></button>&nbsp;&nbsp;&nbsp;&nbsp;
                        <button class="btn btn-secondary btn-circle"><i class="fa fa-download"></i></button>

                        </div>
                    </div>
                       <br></br>
                    <div class='row'>
                    <div class='col-md-11'>
                    <div class="d-flex justify-content-end">
                        <button type="submit" class="btn btn-success btn-sm " data-toggle="tooltip"
                            data-placement="bottom" title="Accept" >Accept</button>
                        &nbsp; &nbsp;
                        <button type="submit" class="btn btn-danger " size="lg-6" data-toggle="tooltip"
                            data-placement="bottom" title="Reject" onClick={this.handleShow}>Reject</button>
                    </div>
                    </div></div>

                </div>
            </div>
        )
    }
}