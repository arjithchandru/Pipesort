import React, {Component} from 'react';

class Dinfo extends Component {
  continue = e => {
        e.preventDefault();
        this.props.nextStep();
    }
    back = e => {
        e.preventDefault();
        this.props.prevStep();
    }

    render(){
        const { emailId, phoneNo, handleChange } = this.props;
        return(
            <>
                <h2>Enter your Contact information:</h2>
                <label>
                    <input
                        type="text"
                        name="emailId"
                        value={emailId}
                        placeholder="E mail"
                        onChange={handleChange('emailId')}
                    />
                </label>
                <label>
                    <input
                        type="text"
                        name="phoneNo"
                        value={phoneNo}
                        placeholder="Mobile No"
                        onChange={handleChange('phoneNo')}
                    />
                </label>
                <button className="Back" onClick={this.back}>
                    « Back
                </button>
                <button className="Next" onClick={this.continue}>
                    Next »
                </button>
            </>
        );
    }
}

export default Dinfo;
