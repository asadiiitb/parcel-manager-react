import axios from "axios";
import {React,Fragment, Component} from 'react'
const Admin_API = "http://localhost:8095";


class AdminService extends Component{
    constructor(props) {
        super(props);
        this.state = {
            x:localStorage.searchKeylocal 

        }
    }
    
    

    getAdmins() {
    	console.log();
        return axios.get(Admin_API.concat("/showadmins"));
    }
    viewRecords() {
    	console.log();
        return axios.get(Admin_API.concat("/viewrecords"));
    }
    showrec(trackId) {
    	
        console.log(typeof(trackId));
        let v="999"

        fetch("http://localhost:8095"+"/record?"+v)
        .then(res=>res.json())
        .then((response)=>{
            console.log(response)
        }).catch(err=>console.log(err))
        /*return axios.get(Admin_API.concat("/record"),{v})*/
    }
}
export default new AdminService();
