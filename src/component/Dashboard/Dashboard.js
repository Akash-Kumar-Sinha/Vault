import React from "react";
import Header from "../Header/Header";
import './Dashboard.css'
import Footer from "../Footer/Footer";

const Dashboard = (props) => {

    return(
    <div>

    <Header onRouteChange={props.onRouteChange}/>
    <ul className="f3 mb5" style={{listStyle: "none"}}>
        <li style={{ marginBottom: "10px" }}>Name-</li>
        <li style={{ marginBottom: "10px" }}>E-mail-</li>
        <li style={{ marginBottom: "10px" }}>Mobile Number-</li>
        <li style={{ marginBottom: "10px" }}>Change Security pin</li>
        <li style={{ marginBottom: "10px" }}>Documents</li>
        <li style={{ marginBottom: "10px" }}>Transaction</li>
        <li style={{ marginBottom: "10px" }} className="signout" onClick={()=>props.onRouteChange('clientsignin')}
        >Sign out</li>
    </ul>
    <Footer/>
    
    </div>
    )
}

export default Dashboard;