import React from "react";
import './Logo.css';

const Logo = () => {
    return(
        <div className="flex align-center">
            <svg 
                className="logo" viewBox="0 0 106 106" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M4 38.2133V28.4381C4 13.7752 13.7752 4 28.4381 4H77.3142C91.9771 4 101.752 13.7752 101.752 28.4381V38.2133" stroke="#292D32" stroke-width="7.33142" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M4 67.5391V77.3143C4 91.9771 13.7752 101.752 28.4381 101.752H77.3142C91.9771 101.752 101.752 91.9771 101.752 77.3143V67.5391" stroke="#292D32" stroke-width="7.33142" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M26.9717 39.4844L52.8763 54.4893L78.5847 39.5822" stroke="#292D32" stroke-width="7.33142" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M52.876 81.0784V54.4409" stroke="#292D32" stroke-width="7.33142" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M46.8157 24.9682L31.1752 33.6683C27.6562 35.6234 24.7236 40.5598 24.7236 44.6166V61.1856C24.7236 65.2424 27.6073 70.1788 31.1752 72.1339L46.8157 80.8338C50.1393 82.6911 55.6134 82.6911 58.9859 80.8338L74.6262 72.1339C78.1453 70.1788 81.0779 65.2424 81.0779 61.1856V44.6166C81.0779 40.5598 78.1942 35.6234 74.6262 33.6683L58.9859 24.9682C55.6134 23.062 50.1393 23.062 46.8157 24.9682Z" stroke="#292D32" stroke-width="7.33142" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>eVault
        </div>
    )
}

export default Logo;