import {React,Fragment, Component} from 'react'
import axios from "axios";
import {Link} from 'react-router-dom';
import sign_up from "./images/signup-image.jpg"
import sign_in from "./images/signin-image.jpg"
import "./css/style.css"

class Signupadmin extends Component{
      constructor(props) {
        super(props);

        this.state = {
            firstname: "",
            lastname: "",
            contactNumber: "",
            username: "",
            email:"",
            password :""
        }

        this.handleChange = this.handleChange.bind(this)
        this.saveAdmin = this.saveAdmin.bind(this);
    }

    handleChange(event) {
        const {name, value} = event.target;
        this.setState({
            [name]: value
        })
    }

    saveAdmin= (event) =>{
        event.preventDefault();
        let customer = {
            firstname: this.state.firstname,
            lastname: this.state.lastname,
            contactNumber: this.state.contactNumber,
            username: this.state.username,
            email: this.state.email,
            password : this.state.password,
        }


        axios.post('http://localhost:8095/register',customer)
            .then(response =>{
                console.log(response);
                console.log(response.data);
                {this.props.history.push('/');
                    console.log("Account Created");
                }
                alert('Account Created ');
            })
            .catch(error =>{
                console.log(error)
            })
        
    }



  render(){
  return (
    		<Fragment>
	
           	<section class="signup">
            <div class="container">
                <div class="signup-content">
                    <div class="signup-form">
                        <h2 class="form-title">Admin Sign up</h2>
                        <form method="POST" class="register-form" id="register-form" onSubmit={this.handleSubmit}>
                            <div class="form-group">
                                <label for="firstname"><i class="zmdi zmdi-account material-icons-name"></i></label>
                                <input type="text" name="firstname" id="firstname" placeholder="Your First Name" value={this.state.firstname} onChange={this.handleChange}/>
                            </div>
                            <div class="form-group">
                                <label for="lastname"><i class="zmdi zmdi-account material-icons-name"></i></label>
                                <input type="text" name="lastname" id="lastname" placeholder="Your Last Name" value={this.state.lastname} onChange={this.handleChange}/>
                            </div>
                            <div class="form-group">
                                <label for="email"><i class="zmdi zmdi-email"></i></label>
                                <input type="email" name="email" id="email" placeholder="Your Email" value={this.state.email} onChange={this.handleChange}/>
                            </div>
                            <div class="form-group">
                                <label for="password"><i class="zmdi zmdi-lock"></i></label>
                                <input type="password" name="password" id="pass" placeholder="Password" value={this.state.password} onChange={this.handleChange}/>
                            </div>
                            <div class="form-group">
                                <label for="username"><i class="zmdi zmdi-account material-icons-name"></i></label>
                                <input type="text" name="username" id="username" placeholder="UserName" value={this.state.username} onChange={this.handleChange}/>
                            </div>

                            <div class="form-group">
                                <label for="contact"><i class="zmdi zmdi-lock-outline"></i></label>
                                <input type="text" name="contact" id="contact" placeholder="Contact Number" value={this.state.contactNumber} onChange={this.handleChange}/>
                            </div>
                            <div class="form-group">
                                <input type="checkbox" name="agree-term" id="agree-term" class="agree-term" />
                                <label for="agree-term" class="label-agree-term"><span><span></span></span>I agree all statements in  <a href="#" class="term-service">Terms of service</a></label>
                            </div>
                            <div class="form-group form-button">
                                <input type="submit" name="signup" id="signup" class="form-submit" value="Register"  onClick={this.saveAdmin}/>
                            </div>
                        </form>
                    </div>
                    <div class="signup-image">
                        <figure><img src={sign_up} alt="sing up image"/></figure>
                        <a href="/signin" class="signup-image-link">I am already member</a>
                    </div>
                </div>
            </div>
        </section>

        
       
    		</Fragment>
    	)
    }
}

export default Signupadmin;