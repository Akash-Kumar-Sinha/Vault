import React from "react";
import './Popup.css';

const Popup = (props) => {
    return(props.trigger)?(
        <div className="popup">
            <div className="popup-inner mt3">
                {props.children}
            </div>
        </div>
    ): "";
}

export default Popup;