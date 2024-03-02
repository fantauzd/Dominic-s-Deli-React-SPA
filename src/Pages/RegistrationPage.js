import React from "react";
import { MdOutlineSavings } from "react-icons/md";
import RegistrationInfo from "../Components/RegistrationInfo";

function RegistrationPage(){
    return (
        <>
            <h2><MdOutlineSavings /> Register for heroic savings <MdOutlineSavings /></h2>
            <p>Register for our adventure club below and get the best deals in the realm!</p>
            <RegistrationInfo />
        </>
    )
}

export default RegistrationPage;