import React, { useState } from "react";
import Logo from "../Logo/Logo";
import Footer from "../Footer/Footer";
import Popup from "../Popups/Popup";

const CreateEvault = (props) => {

    const [otp, setOtp] = useState(false)
    const [input, setInput] = useState('')
    const [rows, setRows] = useState([])

    const onInputChange = (event) => {
          setInput(event.target.value)
        }
    
    const onCreateFolder = () => {
        if (input.trim() !== '') {
            setRows((prevRows) => [...prevRows, input]);
            setInput('');
        }
    };

    let serialNumber = 0;

    return(

    <div className="CaseManager inline-block items-center">

    <header>
        <div className="flex items-center">
        <Logo/>
        <p className="header_paragraph f3 white center">Create eVault</p>
        </div>
    </header>

    <div className="peace box">
        <p>
        "Experience the peace of mind that comes with a blockchain eVault - where your documents are stored securely and forever."
        </p>
    </div>

    <Popup trigger={otp}>

        <div className="mt3 flex flex-column">

        <input
            onChange={onInputChange}
            className="hover pa2 input-reset ba bg-transparent w-100"
            type="text"
            name="folder_name"
            id="folder_name"
            placeholder="Enter Folder Name"
        />
        <div className="flex justify-center">
            <input
                onClick={() => {
                    onCreateFolder();
                    props.onRouteChange("createevault");
                    setOtp(false);
                }}
                className="hover b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib"
                type="submit"
                value="OK"
            />
        </div>

        </div>
    </Popup>

    <div>
        <button className="ml6 hover pa2 input-reset ba bg-transparent"
            onClick={() => {
                setOtp(true);
            }}
            style={{cursor: "pointer"}}
        >Create Folder</button>
    </div>

    <div className="details ma2 mb5">
        
    <table >

        <tr>
            <td>S.No.</td>
            <td>Name</td>
            <td>Time</td>
        </tr>

        <tr>
            <td>
                {++serialNumber}
            </td>
            <td
            onClick={() => {
                props.onRouteChange("viewdoc");
            }}
            style={{cursor: "pointer"}}>ID's</td>
            <td>{new Date().toLocaleString()}</td>

        </tr>
        {rows.map((rowText, index) => (
        <tr key={index}>
        <td>{++serialNumber}</td>
        <td
            onClick={() => {
                props.onRouteChange("viewdoc");
            }}
            style={{cursor: "pointer"}}
            >{rowText}
        </td>
        <td>{new Date().toLocaleString()}</td>
        </tr>
    ))}

    </table>

    </div>

        <Footer/>
    </div>
    
    )
}

export default CreateEvault;