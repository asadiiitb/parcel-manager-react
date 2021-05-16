import React, { Component } from 'react';
import AdminService from './AdminService';


class recordPage extends Component {
    constructor(props) {
        super(props)
        this.state = {
            records: []
        }
    }
    componentDidMount() {
            AdminService.showrec().then((res)=>{
                this.setState({records: res.data});
            });
    }
    render() {
        return ( 
        <div >
            <h2 className = "text-center" > All the Records are listed Below < /h2> 
            <div className = "row" >
            <table className = "table table-striped table-bordered" >
            <thead >
            <tr >
            <th > Item number</th> 
            <th > Track ID < /th> 
            <th > Name < /th> 
            <th > Company name < /th> 
            <th > Status < /th> 
            <th > remarks</th> 
            <th > Number < /th> 
            <th > Date < /th> 
            </tr> 
            </thead> 
            <tbody > {
                this.state.records.map(
                    record =>
                    <tr key = { record.item_no } >
                    <td > { record.trackId } < /td> 
                    <td > { record.name } < /td> 
                    <td > { record.compName } < /td> 
                    <td > { record.status } < /td>
                    <td > { record.remark } < /td> 
                    <td > { record.number } < /td>
                    <td > { record.date } < /td>

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

export default recordPage;