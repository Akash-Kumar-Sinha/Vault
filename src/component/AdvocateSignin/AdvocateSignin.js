// AdvocateSignin
import React from "react";
import './AdvocateSignin.css'
import Logo from "../Logo/Logo";



class AdvocateSignin extends React.Component{

    constructor(props){
        super(props);
        this.state={
            clientChecked: false,
            advocateChecked: true,
            judgeChecked: false
        }
    }
    
    render(){
        const {onRouteChange} = this.props
        return(
            <div className="advocatesignin">
                <header>
                    <Logo/>
                </header>
                
                <div className="image_container flex center">
                    <img className="vault" src="/tilted_vault.png" alt="Block" />
                    <div className="signin_box">
                    <article>
    
                        <main className="pa4 black-80">
                            <div className="measure">
    
                                <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
    
                                <legend className="f3 fw6 ph0 mh0 center">Advocate Sign In</legend>
                                
                                <div className="login_person">
                                    <li>
                                        <input type="checkbox" id="Advocate"
                                            checked={this.state.advocateChecked}
                                            onClick={() => onRouteChange("advocatesignin")}
                                        />Advocate
                                    </li>
                                    <li>
                                        <input type="checkbox" id="Client"
                                            checked={this.state.clientChecked}
                                            onClick={() => onRouteChange("clientsignin")}
                                        />Client
                                    </li>
                                    <li>
                                        <input type="checkbox" id="Judge"
                                            checked={this.state.judgeChecked}
                                            onClick={() => onRouteChange("judgesignin")}
                                        />Judge
                                    </li>
                                </div>

                                <div className="mt3">
    
                                <label className="db fw6 lh-copy f6">License Number</label>
    
                                    <input 
                                        className="hover pa2 input-reset ba bg-transparent w-100" 
                                        type="number" 
                                        name="license_number"  
                                        id="license_number"
                                        placeholder="Enter License Number"
                                    />
                                </div>
    
                                <div className="mv3">
    
                                    <label className="db fw6 lh-copy f6" htmlFor="password">Security Pin</label>
    
                                    <input 
                                        className="hover pa2 input-reset ba bg-transparent w-100" 
                                        type="password" 
                                        name="password"  
                                        id="password"
                                        placeholder="Enter Security pin"
                                    />
                                        {/* <p className="w-80 flex center">eVault uses Aadhaar Number to verify the user</p> */}
                                </div>

 
    
                                </fieldset>

                               
    
                                <div className="flex justify-center">
    
                                <input
                                    onClick={()=>onRouteChange('publicjudiciary')}
                                    className="hover b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib" 
                                    type="submit" 
                                    value="Sign in"
                                />
                                </div>
    
                            </div>
    
                        </main>
    
                    </article>
                    </div>
                </div>
            </div>
        )
    }
}

export default AdvocateSignin;