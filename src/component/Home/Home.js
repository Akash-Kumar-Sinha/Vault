import React from "react";
import Logo from "../Logo/Logo";
import './Home.css'
import Footer from "../Footer/Footer";
import Header from "../Header/Header";

const Home = (props) => {

    return(
    <div className="Home">

    <div onClick={() => props.onRouteChange("dashboard")}>
        <Header onRouteChange={props.onRouteChange}/>
    </div>
        
    <div className="pa2">
    <div className="intro flex">
        <div className="felx">

        <section className="header_logo">
            <Logo/>
        </section>

        <p>
        " Ready to secure your document with blockchain technology? Let's get started on your journey to a safer and smarter way of managing your important files. Get your documents in order, the blockchain way! Starting with our eVault is simple, secure, and effiecient."
        </p>
        
        </div>
        <img className="block" src="/blocks.png" alt="Block" />

    </div>

    <div className="features-parent flex">

    <svg className="circle circle1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 210 210" fill="none">
        <g filter="url(#filter0_d_1_47)">
        <circle cx="105" cy="101" r="101" fill="#61498B"/>
        </g>
        <defs>
            <filter id="filter0_d_1_47" x="0" y="0" width="210" height="210" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
            <feFlood flood-opacity="0" result="BackgroundImageFix"/>
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
            <feOffset dy="4"/>
            <feGaussianBlur stdDeviation="2"/>
            <feComposite in2="hardAlpha" operator="out"/>
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1_47"/>
            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_1_47" result="shape"/>
            </filter>
        </defs>
    </svg>
        
    <div className="features box">

    <p>
    <h2>Features</h2>
    <ul>
        <li>Secure Data Storage</li>
        <li>Immutable Record Keeping</li>
        <li>Audit Trail</li>
        <li>Integration with Legal Systems</li>
        <li>decentralised database -IPFS</li>
        <li>Improved Access to Justice</li>
        <li>Upload, retrieval, tracking of changes, and sharing of information.</li>
        
    </ul>
    </p>

    <button 
        onClick={() => props.onRouteChange("createevault")}
        className="create center">
        Create eVault
    </button>

        
    </div>

    </div>

    <div className="view_evault flex center pa2">
        <div>

        <button 

            onClick={()=>props.onRouteChange('createevault')}
            className="view mb4">
            View eVault
        </button>

        <button
            onClick={() => props.onRouteChange("casemanager")}
            className="view manage mb4">
            Manage Cases
        </button>

        </div>
        
        <div>
            <img className="tilted_vault" src="/tilted_vault.png"   alt="Block" />
        </div>
        
    </div>

    <div className="why_parent flex">
        
    <svg className="circle circle2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 210 210" fill="none">
        <g filter="url(#filter0_d_1_47)">
        <circle cx="105" cy="101" r="101" fill="#61498B"/>
        </g>
        <defs>
            <filter id="filter0_d_1_47" x="0" y="0" width="210" height="210" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
            <feFlood flood-opacity="0" result="BackgroundImageFix"/>
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
            <feOffset dy="4"/>
            <feGaussianBlur stdDeviation="2"/>
            <feComposite in2="hardAlpha" operator="out"/>
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1_47"/>
            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_1_47" result="shape"/>
            </filter>
        </defs>
    </svg>
    
    <div className="why box">
    <p>

    <h2>Why decentralized eVault?</h2>

        <p>
        The development of a blockchain-based eVault system for legal records can have a significant impact on improving access to justice in India. It can lead to faster, more efficient court proceedings, reduced costs, improved data integrity, and increased trust in the justice system. Moreover, it can provide a secure and transparent platform for storing and sharing legal records, making it easier for clients to access their own records and for lawyers to access relevant case information.
        </p>
        
    </p>
    </div>

    </div>

    <div className="works_parent flex">

    <svg className="circle circle4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 210 210" fill="none">
        <g filter="url(#filter0_d_1_47)">
        <circle cx="105" cy="101" r="101" fill="#61498B"/>
        </g>
        <defs>
            <filter id="filter0_d_1_47" x="0" y="0" width="210" height="210" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
            <feFlood flood-opacity="0" result="BackgroundImageFix"/>
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
            <feOffset dy="4"/>
            <feGaussianBlur stdDeviation="2"/>
            <feComposite in2="hardAlpha" operator="out"/>
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1_47"/>
            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_1_47" result="shape"/>
            </filter>
        </defs>
    </svg>

    <div className="works box">
    <p>
    <h2>How it works</h2>

    <img className="work" src="/works.png" alt="work" />

    </p>
    </div>

    <svg className="circle circle5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 210 210" fill="none">
        <g filter="url(#filter0_d_1_47)">
        <circle cx="105" cy="101" r="101" fill="#61498B"/>
        </g>
        <defs>
            <filter id="filter0_d_1_47" x="0" y="0" width="210" height="210" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
            <feFlood flood-opacity="0" result="BackgroundImageFix"/>
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
            <feOffset dy="4"/>
            <feGaussianBlur stdDeviation="2"/>
            <feComposite in2="hardAlpha" operator="out"/>
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1_47"/>
            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_1_47" result="shape"/>
            </filter>
        </defs>
    </svg>

    </div>
    
    </div>

    <Footer/>
        
    </div>
    )
}

export default Home;