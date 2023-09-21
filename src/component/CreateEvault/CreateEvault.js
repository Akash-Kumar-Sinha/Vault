import React from "react";
import Logo from "../Logo/Logo";
import Footer from "../Footer/Footer";
import Popup from "../Popups/Popup";

class CreateEvault extends React.Component{

    constructor(props){
        super(props);
        this.state={
            otp: false
        }
    }
    render(){
        const {onRouteChange} = this.props
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
            <Popup trigger={this.state.otp}>
                <div className="mt3 flex flex-column">
                    <input
                        className="hover pa2 input-reset ba bg-transparent w-100"
                        type="text"
                        name="folder_name"
                        id="folder_name"
                        placeholder="Enter Folder Name"
                        
                    />
                    <div className="flex justify-center">
                        <input
                            onClick={() => {
                                onRouteChange("createevault");
                                this.setState({ otp: false });
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
                        this.setState({ otp: true });
                    }}
                    style={{cursor: "pointer"}}
                    >Create Folder</button>
                </div>
            <div className="details ma2 mb5">
                
            <table >
                <tr>
                    <td>S.No.</td>
                    <td>Name</td>
                    <td>Type</td>
                </tr>
                <tr>
                    <td>1</td>
                    <td
                    onClick={() => {
                        onRouteChange("viewdoc");
                    }}
                    style={{cursor: "pointer"}}>ID's</td>
                    <td>pdf</td>
                </tr>
                <tr>
                    <td>2</td>
                    <td>Property</td>
                    <td>pdf</td>
                </tr>
                <tr>
                    <td>3</td>
                    <td>Marksheet</td>
                    <td>pdf</td>
                </tr>
            </table>
            </div>


            <Footer/>
        </div>
    )
    }
}

export default CreateEvault;