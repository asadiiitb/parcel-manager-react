import {React,Fragment, Component} from 'react'
import axios from "axios";
import {Link} from 'react-router-dom';
import sign_up from "./images/signup-image.jpg"
import sign_in from "./images/signin-image.jpg"
import Signupadmin from "./Sign-up-Admin"
import admin_options from "./Admin-Options"

import "./css/style.css"

class Admin_Signin extends Component {
    
        constructor(props) {
        super(props);
        this.state = {
            username: "",
            password: "",
            errorMessage : false
        }
        this.UserHandler=this.UserHandler.bind(this)
        this.PasswordHandler=this.PasswordHandler.bind(this)
        this.handleClick= this.handleClick.bind(this)
    }

    UserHandler= (event) => {
        this.setState({username: event.target.value});
    }
    PasswordHandler= (event) => {
        this.setState({password: event.target.value});
    }
    handleClick= (event) =>{
        event.preventDefault();
        let customer = {
            username: this.state.username,
            password: this.state.password
        }
        console.log(customer);
        axios.post('http://localhost:8095/login',customer)
            .then(response =>{
                console.log(response);
                console.log(response.data);
                this.props.history.push('/');
                    console.log("login");
                localStorage.setItem("login","true");
                this.props.history.push('/admin-options')
                alert('login');
            })
            .catch(error =>{
                console.log(error)
            })
        
    }

    render(){
      return (
    		<Fragment>

    		<section class="sign-in">
            <div class="container">
                <div class="signin-content">
                    <div class="signin-image">
                        <figure><img src={sign_in} alt="sing up image"/></figure>
                        <a href="/signup" class="signup-image-link">Create a New Admin</a>{/* Link to SIgn-up Admin*/}
                    </div>

                    <div class="signin-form">
                        <h2 class="form-title">Admin Sign In</h2>
                        <form method="POST" class="register-form" id="login-form">
                            <div class="form-group">
                                <label for="UserName"><i class="zmdi zmdi-account material-icons-name"></i></label>
                                <input type="text" name="username" id="username" placeholder="Your UserName"    value={this.state.username} onChange={this.UserHandler}/>
                            </div>
                            <div class="form-group">
                                <label for="your_pass"><i class="zmdi zmdi-lock"></i></label>
                                <input type="password" name="your_pass" id="your_pass" placeholder="Password" value={this.state.password} onChange={this.PasswordHandler}/>
                            </div>
                            <div class="form-group">
                                <input type="checkbox" name="remember-me" id="remember-me" class="agree-term" />
                                <label for="remember-me" class="label-agree-term"><span><span></span></span>Remember me</label>
                            </div>
                            <div class="form-group form-button">
                                <input type="submit" name="signin" id="signin" class="form-submit" onClick={this.handleClick} value="Log in"/>
                            {/* IF login success ful go to Admin Options else show alert */}
                            </div>
                        </form>
                        {/* <div class="social-login">
                            <span class="social-label">Or login with</span>
                            <ul class="socials">
                                <li><a href="#"><i class="display-flex-center zmdi zmdi-facebook"></i></a></li>
                                <li><a href="#"><i class="display-flex-center zmdi zmdi-twitter"></i></a></li>
                                <li><a href="#"><i class="display-flex-center zmdi zmdi-google"></i></a></li>
                            </ul>
                        </div> */}
                    </div>
                </div>
            </div>
            </section>       
       
    		</Fragment>
    	)
  }

}

export default Admin_Signin;