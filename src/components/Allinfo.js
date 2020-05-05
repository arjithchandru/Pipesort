import React, { Component } from 'react';

class Allinfo extends Component {
    back = e => {
        e.preventDefault();
        this.props.prevStep();
    }
    render(){
        const { firstName, lastName, emailId, phoneNo, jobTitle, jobCompany, jobLocation } = this.props;
        return(
            <>
                <h2>Here is the information you entered:</h2>
                First Name: <b>{firstName}</b><br />
                Last Name: <b>{lastName}</b><br />
                Email: <b>{emailId}</b><br />
                Mobile: <b>{phoneNo}</b><br />
                Job: <b>{jobTitle}</b><br />
                Company: <b>{jobCompany}</b><br />
                Location: <b>{jobLocation}</b><br />
                <button className="Back" onClick={this.back}>
                    « Back
                </button>
            </>
        );
    }
}

export default Allinfo;
