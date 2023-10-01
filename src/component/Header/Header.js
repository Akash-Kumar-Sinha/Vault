import React from "react";
import Logo from "../Logo/Logo";

const Header = (props) => {

    return(

    <header className="flex justify-between items-center">
        <Logo/>
        <svg
        style={{cursor: "pointer"}}
        onClick={() => props.onRouteChange("dashboard")}
        xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 184 184" fill="none">
        <path d="M91.9334 0C66.6517 0 45.9667 25.7414 45.9667 57.4584C45.9667 89.1754 66.6517 114.917 91.9334 114.917C117.215 114.917 137.9 89.1754 137.9 57.4584C137.9 25.7414 117.215 0 91.9334 0ZM43.8982 114.917C19.5359 116.066 0 136.062 0 160.884V183.867H183.867V160.884C183.867 136.062 164.561 116.066 139.969 114.917C127.558 128.937 110.55 137.9 91.9334 137.9C73.3169 137.9 56.3092 128.937 43.8982 114.917Z" fill="black"/>
        </svg>
    </header>

    )
}

export default Header;