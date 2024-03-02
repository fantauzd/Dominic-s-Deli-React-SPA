import React from "react";
import SelectQuantity  from "./SelectQuantity";

function OrderRow({item}){
    return(
        <tr>
            <th>{item.name}</th>
            <th>{item.price}</th>
            <th><SelectQuantity /></th>
        </tr>
    );
}

export default OrderRow;