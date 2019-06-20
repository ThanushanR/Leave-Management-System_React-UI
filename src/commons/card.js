import React, { Component } from 'react'
import ApplyLeaveForm from '../components/leave-system/apply-leave-form';
export default class Card extends Component {
    render() {
        return (
          <div class="card">
            <div class="card-header">
              <h3 class="h6 text-uppercase mb-0">{this.props.title}</h3>
            </div>
            <div class="card-body">
              {this.props.children}
            </div>
          </div>
        )
    }
}
