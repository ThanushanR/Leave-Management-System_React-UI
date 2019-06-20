import React, { Component } from "react";
import {Link} from 'react-router-dom'
class Login extends Component{
  
    render(){
        return(
          <div>
         <div class="col-12 col-lg-2 ml-left mb-12 mb-lg-12 ">
          <div class="pr-lg-12"><img src="assets/img/New Project (1).png" alt="" class="img-fluid"/></div>
       </div>
            <div class="page-holder d-flex align-items-center ">
           
            <div class="container  ">
                
              <div class="row align-items-center py-10">
                <div class="col-5 col-lg-7 mx-auto mb-5 mb-lg-10">
                  <div class="pr-lg-5"><img src="assets/img/New Project (6).png" alt="" class="img-fluid"/></div>
                </div>
                <div class="col-lg-5 px-lg-4">
                
                  <h1 class="mb-4">Login</h1>
                  <form id="loginForm" action="index.html" class="mt-4">
                    <div class="form-group mb-4">
                      <input type="text" name="username" placeholder="Username or Email address" class="form-control border-0 shadow form-control-lg"/>
                    </div>
                    <div class="form-group mb-4">
                      <input type="password" name="passowrd" placeholder="Password" class="form-control border-0 shadow form-control-lg text-violet"/>
                    </div>
                    <div class="form-group mb-4">
                      <div class="custom-control custom-checkbox">
                        <input id="customCheck1" type="checkbox" checked class="custom-control-input"/>
                        <label for="customCheck1" class="custom-control-label">Remember Me</label>
                      </div>
                    </div>
                    <Link to="/" ><button type="submit" class="btn btn-primary shadow px-5">Log in</button></Link>
                  </form>
                </div>
              </div>
            </div>
          </div>
          </div>
        )
    }
}
export default Login;