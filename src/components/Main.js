import React,{ Component } from 'react';
import Pinfo from './Pinfo';
import Dinfo from './Dinfo';
import Jobinfo from './Jobinfo';
import Allinfo from './Allinfo'


class Main extends Component {
  state ={
    step:1,
    //step:1
    firstName: '',
    lastName: '',

      //step:2
        emailId: '',
        phoneNo: '',


    //step:3
    jobTitle: '',
    jobCompany: '',
    jobLocation: ''


  }
  nextStep = () => {
        const { step } = this.state;

        this.setState({
            step: step + 1
        });
    }

    prevStep = () => {
        const { step } = this.state;
        this.setState({
            step: step - 1
        });
    }

    handleChange = input => e => {
        this.setState({[input]: e.target.value});
    }

    showStep = () => {
        const { step, firstName, lastName, emailId, phoneNo, jobTitle, jobCompany, jobLocation } = this.state;

        if(step === 1)
            return (<Pinfo
                nextStep = {this.nextStep}
                handleChange = {this.handleChange}
                firstName={firstName}
                lastName={lastName}
            />);

            if(step === 2)
             return ( <Dinfo
               nextStep = {this.nextStep}
               prevStep = {this.prevStep}
               handleChange = {this.handleChange}
               emailId={emailId}
               phoneNo={phoneNo}
              />);

        if(step === 3)
            return (<Jobinfo
                nextStep = {this.nextStep}
                prevStep = {this.prevStep}
                handleChange = {this.handleChange}
                jobTitle={jobTitle}
                jobCompany={jobCompany}
                jobLocation={jobLocation}
            />);
        if(step === 4)
            return (<Allinfo
                firstName={firstName}
                lastName={lastName}
                emailId={emailId}
                phoneNo={phoneNo}
                jobTitle={jobTitle}
                jobCompany={jobCompany}
                jobLocation={jobLocation}
                prevStep = {this.prevStep}
            />);


    }

    render(){
        const { step } = this.state;

        return(
            <>
                <h2>Step {step} of 4.</h2>
                {this.showStep()}
            </>
        );
    }
}
export default Main;
