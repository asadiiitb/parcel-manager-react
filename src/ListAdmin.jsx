import React, { Component } from 'react';
import AdminService from './AdminService';


class ListAdmin extends Component {
    constructor(props) {
        super(props)
        this.state = {
            admins: []
        }
    }
    componentDidMount() {
            AdminService.getAdmins().then((res)=>{
                this.setState({admins: res.data});
            });
    }
    render() {
        return ( 
        <div >
            <h2 className = "text-center" > Total Admins < /h2> 
            <div className = "row" >
            <table className = "table table-striped table-bordered" >
            <thead >
            <tr >
            <th > Admin's FirstName</th> 
            <th > LastName < /th> 
            <th > Email < /th> 
            <th > UserName < /th> 
            <th > Actions < /th> 
            </tr> 
            </thead> 
            <tbody > {
                this.state.admins.map(
                    admin =>
                    <tr key = { admin.id } >
                    <td > { admin.firstName } < /td> 
                    <td > { admin.lastName } < /td> 
                    <td > { admin.email } < /td> 
                    <td > { admin.userName } < /td>

                    </tr>
                )
            } 
            </tbody> 
            </table> 
            </div> 
            </div>
        );
    }
}

export default ListAdmin;