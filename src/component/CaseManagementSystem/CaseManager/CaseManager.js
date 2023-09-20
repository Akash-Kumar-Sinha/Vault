import React from "react";
import Logo from "../../Logo/Logo";

const CaseManager = () => {
    return(
        <div className="CaseManager inline-block items-center">
            <header>
                <div className="flex items-center">
                <Logo/>
                <p className="header_paragraph f3 white center">Case Manager</p>
                </div>
            </header>

            <div className="peace">
                <p>
                "Experience the peace of mind that comes with a blockchain eVault - where your documents are stored securely and forever."
                </p>
            </div>

            <div className="details">
            <table border="1">
                <tr>
                    <td>Case Details</td>
                    <td>
                        <input 
                            className="hover pa2 input-reset ba bg-transparent w-100" 
                            type="number" 
                            name="case_number"  
                            id="case_number"
                            placeholder="Case Number"
                        />
                    </td>
                    <td>Documents</td>
                </tr>
                <tr>
                    <td>S.No.</td>
                    <td>Case ID</td>
                    <td>Status</td>
                    <td>View</td>
                </tr>
                <br/>
                <tr>
                    <td>1</td>
                    <td>4568</td>
                    <td>Pending</td>
                    <td>Click here</td>
                </tr>
                <tr>
                    <td>2</td>
                    <td>4569</td>
                    <td>Pending</td>
                    <td>Click here</td>
                </tr>
                <tr>
                    <td>3</td>
                    <td>4570</td>
                    <td>Pending</td>
                    <td>Click here</td>
                </tr>   
</table>

            </div>
            
        </div>
    )
}

export default CaseManager;