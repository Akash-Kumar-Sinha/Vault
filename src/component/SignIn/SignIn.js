import React, {useState} from "react";
import './SignIn.css'
import Logo from "../Logo/Logo";



const SignIn = (props) => {

    const [clientChecked, setClientChecked] = useState(true)
    const [advocateChecked, setAdvocateChecked] = useState(false)
    const [judgeChecked, setJudgeChecked] = useState(false)


    const handleAdvocateClick = () => {
        setClientChecked(false);
        setAdvocateChecked(true);
        setJudgeChecked(false)
    }

    const handleClientClick = () => {
        setClientChecked(true);
        setAdvocateChecked(false);
        setJudgeChecked(false)
    }

    const handleJudgeClick = () => {
        setClientChecked(false);
        setAdvocateChecked(false);
        setJudgeChecked(true)
    }

    return(
    <div className="signin">
        <header>
            <Logo/>
        </header>
        
        <div className="image_container flex center">
            <img className="vault" src="/tilted_vault.png" alt="Block" />
            <div className="signin_box">

        {( clientChecked === true
        ? (
        <article>

        <main className="pa4 black-80">
        <div className="measure">
        <fieldset id="sign_up" className="ba b--transparent ph0 mh0">

        <legend className="f3 fw6 ph0 mh0 center">Client Sign In</legend>

        <div className="login_person">
            <li>
                <input type="checkbox" id="Advocate"
                    checked={advocateChecked}
                    onClick={() => handleAdvocateClick()}
                />Advocate
            </li>
            <li>
                <input type="checkbox" id="Client"
                    checked={clientChecked}
                    onClick={() =>handleClientClick()}
                />Client
            </li>
            <li>
                <input type="checkbox" id="Judge"
                    checked={judgeChecked}
                    onClick={() => handleJudgeClick()}
                />Judge
            </li>
        </div>

        <div className="mt3">

            <label className="db fw6 lh-copy f6">Mobile Number</label>

            <input 
                className="hover pa2 input-reset ba bg-transparent w-100" 
                type="number" 
                name="mobile_number"  
                id="mobile_number"
                placeholder="Enter Mobile Number"
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
        </div>

        </fieldset>

        <div className="flex justify-center">

        <input
            onClick={()=>props.onRouteChange('home')}
            className="hover b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib" 
            type="submit" 
            value="Sign in"
        />
        </div>

        <div className="flex justify-center lh-copy mt3">

        <p 
            onClick={()=>props.onRouteChange('register')}
            className="f6 link dim black db grow pointer">
            Register
            </p>

        </div>

        </div>
        </main>
        </article>
        
        )
        : (advocateChecked === true
        ?(
        <article>

        <main className="pa4 black-80">
        <div className="measure">

        <fieldset id="sign_up" className="ba b--transparent ph0 mh0">

        <legend className="f3 fw6 ph0 mh0 center">Advocate Sign In</legend>
        
        <div className="login_person">
            <li>
                <input type="checkbox" id="Advocate"
                    checked={advocateChecked}
                    onClick={() => handleAdvocateClick()}
                />Advocate
            </li>
            <li>
                <input type="checkbox" id="Client"
                    checked={clientChecked}
                    onClick={() => handleClientClick()}
                />Client
            </li>
            <li>
                <input type="checkbox" id="Judge"
                    checked={judgeChecked}
                    onClick={() => handleJudgeClick()}
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
        </div>

        </fieldset>

        <div className="flex justify-center">

        <input
            onClick={()=>props.onRouteChange('publicjudiciary')}
            className="hover b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib" 
            type="submit" 
            value="Sign in"
        />
        </div>

        </div>
        </main>
        </article>
        ):(judgeChecked === true
        ?(
        <article>

        <main className="pa4 black-80">
        <div className="measure">

        <fieldset id="sign_up" className="ba b--transparent ph0 mh0">

        <legend className="f3 fw6 ph0 mh0 center">Judge Sign In</legend>
        
        <div className="login_person">
            <li>
                <input type="checkbox" id="Advocate"
                    checked={advocateChecked}
                    onClick={() => handleAdvocateClick()}
                />Advocate
            </li>
            <li>
                <input type="checkbox" id="Client"
                    checked={clientChecked}
                    onClick={() => handleClientClick()}
                    
                />Client
            </li>
            <li>
                <input type="checkbox" id="Judge"
                    checked={judgeChecked}
                    onClick={() => handleJudgeClick()}
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
        </div>

        </fieldset>

        <div className="flex justify-center">

        <input
            onClick={()=>props.onRouteChange('publicjudiciary')}
            className="hover b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib" 
            type="submit" 
            value="Sign in"
        />
        </div>

        </div>
        </main>
        </article>
        ): null
        )  
        )
        )}            

            </div>
        </div>
    </div>
    )
}

export default SignIn;