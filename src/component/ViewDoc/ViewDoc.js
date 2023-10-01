import React, {useState} from "react";
import Logo from "../Logo/Logo";
import Popup from "../Popups/Popup";
import Footer from "../Footer/Footer";

const ViewDoc = (props) => {

    const [upload, setUpload] = useState(false)
    const [success, setSuccess] = useState(false)


    return(

    <div className="CaseManager inline-block items-center">
        
    <header>
        <div className="flex items-center">
        <Logo/>
        <p className="header_paragraph f3 white center">View Doc</p>
        </div>
    </header>

    <div className="ma3">
        <h3 className="ml6 pa2">Id's</h3>
        <button
            className="ml6 hover pa2 input-reset ba bg-transparent"
            onClick={() => {
                setUpload(true);
            }}
            style={{cursor: "pointer"}}
        >upload Objects
        </button>
        <Popup trigger={upload}>
            <div className="mt3 flex flex-column">
                <h3>upload Documents</h3>
                <div className="flex center">
                    <div>
                        <img
                        style={{cursor: "pointer"}}
                        className="upload" src="/upload.png" alt="upload" width="50" height="50" />
                        <p>File Name</p>
                    </div>
                    <div>
                        <p>Maximum Size 20MB</p>
                    </div>
                </div>
                <div className="flex justify-center">
                    <input
                        onClick={() => {
                            setUpload(false)
                            setSuccess(true);
                        }}
                        className="hover b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib"
                        type="submit"
                        value="upload"
                    />
                </div>
            </div>
        </Popup>

        <Popup trigger={success}>
            <div className="flex flex-column center">
                <h1 className="flex center">Success</h1><br/>
                <div className="flex center tc">
                    <input
                        onClick={() => {
                            props.onRouteChange("viewdoc");
                            setSuccess(false);
                        }}
                        className="flex center tc hover b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib w10  "
                        type="submit"
                        value="Ok"
                    />
            </div>
            </div>
        </Popup>

    </div>

    <div className="details mb5">
    <table className="ma3">
        <tr>
            <td>1</td>
            <td>Aadhaar Card</td>
            <td>id</td>
        </tr>
        <tr>
            <td>2</td>
            <td>PAN card</td>
            <td>id</td>
        </tr>
    </table>
    </div>

    <Footer/>
    </div>
        
    )
}

export default ViewDoc;