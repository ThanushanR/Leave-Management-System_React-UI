import React, { Component } from "react";
import { Table } from "react-bootstrap";
import {connect} from 'react-redux';
import {getUserrole} from '../../../actions/userroleActions';
import PropTypes from 'prop-types';

 class UserRoleList extends Component {
 
  componentDidMount(){
    this.props.getUserrole();
  }

  render() {
    const { roles } = this.props.userrole;
    return (
      <Table class="table table-striped table-hover card-text">
        <thead>
          <tr>
            <th>Role Id</th>
            <th>Role Name</th>
          </tr>
        </thead>
        <tbody>
          {roles.map(({ id, rolename }) => (
            <tr key={id}>
              <td>{id}</td>
              <td>{rolename}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    );
  }
}

UserRoleList.propTypes={
  getUserrole:PropTypes.func.isRequired,
  userrole:PropTypes.object.isRequired
}

const mapStateToProps=(state)=>({
  userrole:state.userrole
})

export default connect(mapStateToProps,{getUserrole})(UserRoleList);