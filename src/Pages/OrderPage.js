import React from 'react';
import { PiCoinsFill } from "react-icons/pi";
import OrderTable from '../Components/OrderTable';


function OrderPage({items}){
    return (
        <>
            <h2>Gather your wares here <PiCoinsFill /></h2>
            <p>Fill up your pack with the wares below.</p>
            <OrderTable items={items} />

        </>
    )
}

export default OrderPage;