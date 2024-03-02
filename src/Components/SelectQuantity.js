import React, {useState} from 'react';
import { MdAdd} from "react-icons/md";
import { RiSubtractFill } from "react-icons/ri";

function SelectQuantity(){
    let [getCounter, setCounter] = useState(0);
    const incCounter = () => {
        if (getCounter < 10) {
            setCounter(getCounter+1); 
        }
    }
    const decCounter = () => {
        if (getCounter > 0) {
            setCounter(getCounter-1); 
        }
    }
    return(
        <>
            <p><RiSubtractFill onClick={decCounter} /> {getCounter} <MdAdd onClick={incCounter} /> </p>
        </>
    );
}

export default SelectQuantity;