import React from "react";
import OrderRow from "./OrderRow";

function OrderTable({items}){
    return(
        <table className="order-table">
            <tbody>
                <tr>
                    <th><b>Item</b></th>
                    <th><b>Price</b></th>
                    <th><b>Quantity</b></th>
                </tr>
                {items.map(
                    (item, i) => <OrderRow item={item} key={i} /> 
                )}
            </tbody>
        </table>
    );
}

export default OrderTable;