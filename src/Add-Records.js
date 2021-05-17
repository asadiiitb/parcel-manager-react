import {React,Fragment, Component} from 'react'
import axios from "axios";
import {Link} from 'react-router-dom';
import sign_up from "./images/signup-image.jpg"
import sign_in from "./images/signin-image.jpg"
import "./css/style.css"

class AddRecords extends Component{
      constructor(props) {
        super(props);

        this.state = {
            item_no : "",
            trackId : "",
            name : "",
            compName : "",
            status  : "",
            remark : "",
            number : "",
            date : ""
        }

        this.handleChange = this.handleChange.bind(this)
        this.saveRecord = this.saveRecord.bind(this);
    }

    handleChange(event) {
        const {name, value} = event.target;
        this.setState({
            [name]: value
        })
    }
    saveRecord= (event) =>{
        event.preventDefault();
        let record = {
            trackId: this.state.trackId,
            name: this.state.name,
            compName: this.state.compName,
            status: this.state.status,
            remark: this.state.remark,
            number: this.state.number,
            date: this.state.date,
    }



        {/* Add Api for Record addition */}
        axios.post('http://localhost:8095/addrecord',record)
            .then(response =>{
                console.log(response);
                console.log(response.data);
                {this.props.history.push('/records'); {/* Add URL to record View*/}
                    console.log("Record Added");
                }
                alert('Record Added');
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
                        <a href="/signin" class="signup-image-link">Admin-Login</a>
                    </div>

                    <div class="signin-form">
                        <h2 class="form-title">Add Record to Parcel Manager </h2>
                        <form method="POST" class="register-form" id="register-form" onSubmit={this.handleSubmit}>
                            
                            <div class="form-group">
                                <label for="trackId"><i class="zmdi zmdi-account material-icons-name"></i></label>
                                <input type="text" name="trackId" id="trackId" placeholder="Track ID" value={this.state.trackId} onChange={this.handleChange}/>
                            </div>

                            <div class="form-group">
                                <label for="name"><i class="zmdi zmdi-account material-icons-name"></i></label>
                                <input type="text" name="name" id="name" placeholder="Name" value={this.state.name} onChange={this.handleChange}/>
                            </div>
                            <div class="form-group">
                                <label for="compName"><i class="zmdi zmdi-email"></i></label>
                                <input type="text" name="compName" id="compName" placeholder="Company Name" value={this.state.compName} onChange={this.handleChange}/>
                            </div>
                            <div class="form-group">
                                <label for="status"><i class="zmdi zmdi-email"></i></label>
                                <input type="text" name="status" id="status" placeholder="Current Status" value={this.state.status} onChange={this.handleChange}/>
                            </div>
                            <div class="form-group">
                                <label for="remark"><i class="zmdi zmdi-email"></i></label>
                                <input type="text" name="remark" id="remark" placeholder="Any Comments" value={this.state.remark} onChange={this.handleChange}/>
                            </div>
                            <div class="form-group">
                                <label for="number"><i class="zmdi zmdi-email"></i></label>
                                <input type="text" name="number" id="number" placeholder="number" value={this.state.number} onChange={this.handleChange}/>
                            </div>
                            
                            <div class="form-group">
                                <label for="date"><i class="zmdi zmdi-email"></i></label>
                                <input type="text" name="date" id="date" placeholder="date" value={this.state.date} onChange={this.handleChange}/>
                            </div>
                             
                            <div class="form-group form-button">
                                <input type="submit" name="AddRecords" id="AddRecords" class="form-submit" value="Register"  onClick={this.saveRecord}/>
                            </div>
                        </form>
                        {/*<div class="social-login">
                            <span class="social-label">Or login with</span>
                            <ul class="socials">
                                <li><a href="#"><i class="display-flex-center zmdi zmdi-facebook"></i></a></li>
                                <li><a href="#"><i class="display-flex-center zmdi zmdi-twitter"></i></a></li>
                                <li><a href="#"><i class="display-flex-center zmdi zmdi-google"></i></a></li>
                            </ul>
                        </div>
                    */}
                    </div>
                </div>
            </div>
        </section>
            
        </Fragment>
        

    	)
    }
}

export default AddRecords;



