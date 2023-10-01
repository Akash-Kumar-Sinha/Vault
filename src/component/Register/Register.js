import React, { useState } from "react";
import './Register.css'
import Logo from "../Logo/Logo";
import Popup from "../Popups/Popup";

const Register = (props) => {

    // handleVerifyOTP = () => {
        
    // }

    const [isVerifying, setIsVerifying] = useState(false)
    const [otpPopup, setOtpPopup] = useState(false)

    return(
    <div className="register">

    <header>
        <Logo/>
    </header>

    <div className="image_container flex center">
    <img className="vault" src="/tilted_vault.png" alt="Block" />
    <div className="register_box">
    <article>

    <main className="pa4 black-80">
    <div className="measure">

    <fieldset id="sign_up" className="ba b--transparent ph0 mh0">

    <legend className="f3 fw6 ph0 mh0 center">Register</legend>

    <div className="mt3">

    <input 
        className="hover pa2 input-reset ba bg-transparent w-100" 
        type="text" 
        name="name"  
        id="name"
        placeholder="Enter Full Name"
    />
    </div>

    <div className="mt3">

    <label className="db fw6 lh-copy f6" htmlFor="dob">DOB</label>

    <input 
        className="hover pa2 input-reset ba bg-transparent w-90" 
        type="date" 
        name="dob"  
        id="dob"
    />
    </div>

    <div className="mt3">

    <input 
        className="hover pa2 input-reset ba bg-transparent w-100" 
        type="number" 
        name="mobile_number"  
        id="mobile_number"
        placeholder="Mobile Number"
    />
    
    </div>

    

    <div className="mv3">

        <input 
            className="hover pa2 input-reset ba bg-transparent w-100" 
            type="password" 
            name="password"  
            id="password"
            placeholder="Set 6 digit Security pin"
        />

    </div>

    <div className="mv3">

        <input 
            className="hover pa2 input-reset ba bg-transparent w-100" 
            type="email" 
            name="email_address"  
            id="email_address"
            placeholder="Enter E-mail Address"
        />

    </div>

    <div className="mt3">

        <input 
            className="hover pa2 input-reset ba bg-transparent w-100" 
            type="number" 
            name="aadhar"  
            id="aadhar"
            placeholder="Enter Aadhaar Number"
        />

    </div>
    <p className="w-90 b flex center">eVault uses Aadhaar Number to verify the user</p>
  
    <Popup trigger={this.state.otpPopup}>
        <div className="mt3 flex flex-column">
        <input
            className="hover pa2 input-reset ba bg-transparent w-100"
            type="text"
            name="otp"
            id="otp"
            placeholder="Enter OTP"
            
        />
            <div className="flex justify-center">
            <input
                onClick={() => {
                    // this.handleVerifyOTP();
                    props.onRouteChange('clientsignin');
                }}
                className="hover b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib"
                type="button"
                value="Verify"
            />
            </div>
        </div>
    </Popup>

    <div className="flex justify-center">
        <button
            onClick={() => {
                setIsVerifying(true)
                setOtpPopup(true)
            }
        }
            className="hover b ph3 pv2 ba b--black bg-transparent grow pointer f6 dib"
            type="button"
        >
            Register
        </button>
    </div>

    </fieldset>

    </div>
    </main>
    </article>

    </div>
    </div>

    </div>
    )
}

export default Register;