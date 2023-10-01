import React from "react";
import Logo from "../../Logo/Logo";
import Footer from "../../Footer/Footer";

const CaseDoc = () => {
    return(
    <div className="CaseManager inline-block items-center">
    <header>
        <div className="flex items-center">
        <Logo/>
        <p className="header_paragraph f3 white center">Case Doc</p>
        </div>
    </header>

    <div className="flex justify-end pt3 pr3">
        <svg style={{cursor: "pointer"}} xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 43 53" fill="none">
        <path d="M42.0098 33.0985L39.2146 28.6995C38.6276 27.719 38.0965 25.864 38.0965 24.7775V18.073C38.0965 11.8455 34.2392 6.466 28.6768 3.9485C27.2233 1.5105 24.5399 0 21.4652 0C18.4185 0 15.6793 1.5635 14.2258 4.028C8.77518 6.5985 5.00169 11.925 5.00169 18.073V24.7775C5.00169 25.864 4.4706 27.719 3.88362 28.673L1.06048 33.0985C-0.0575926 34.874 -0.309158 36.835 0.389637 38.637C1.06048 40.4125 2.65373 41.7905 4.72217 42.453C10.1448 44.202 15.847 45.05 21.5491 45.05C27.2512 45.05 32.9534 44.202 38.3761 42.4795C40.3327 41.87 41.8421 40.4655 42.5688 38.637C43.2956 36.8085 43.0999 34.7945 42.0098 33.0985Z" fill="#292D32"/>
        <path d="M29.4027 47.7267C28.2287 50.8007 25.126 53.0002 21.4923 53.0002C19.2841 53.0002 17.1039 52.1522 15.5665 50.6417C14.672 49.8467 14.0012 48.7867 13.6099 47.7002C13.9732 47.7532 14.3366 47.7797 14.7279 47.8327C15.3708 47.9122 16.0417 47.9917 16.7125 48.0447C18.3058 48.1772 19.927 48.2567 21.5482 48.2567C23.1415 48.2567 24.7347 48.1772 26.3 48.0447C26.887 47.9917 27.474 47.9652 28.033 47.8857C28.4803 47.8327 28.9275 47.7797 29.4027 47.7267Z" fill="#292D32"/>
        </svg> Notify Content
    </div>

    <ul className="f4" style={{listStyle: "none"}}>
        <li>Name-</li>
        <li>Petition-</li>
        <li>Court Docket Number-</li>
        <li>Court Name-</li>
        <li>Date filed-</li>
        <li>Nature of the Case-</li>
        <li>Hearing and Court Dates-</li>
    </ul>

    <div className="details flex flex-column ml4">
    <table>
        <tr>
            <td>Case ID 4568</td>
            <td>Status Pending</td>
            <td style={{cursor: "pointer"}}>Upload</td>
        </tr>
        <br/>
        <tr>
            <td>S.No.</td>
            <td>Documents</td>
            <td>View</td>
        </tr>
        <tr>
            <td>1</td>
            <td>Sales Documents Formats</td>
            <td style={{cursor: "pointer"}}>Click here</td>
        </tr>
        <tr>
            <td>2</td>
            <td>Evidence Proof</td>
            <td style={{cursor: "pointer"}}>Click here</td>
        </tr>   
    </table>
    <button className="ml6 ma4 w5 hover pa2 input-reset ba bg-transparent">
        Tap for More Details
    </button>

    </div>

    <Footer/>
    </div>
    )
}

export default CaseDoc