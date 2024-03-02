import React from 'react';
import { GiDoubleDragon } from "react-icons/gi";
import { GiDragonBreath } from "react-icons/gi";

function HomePage(){
    return (
        <>
            <h2> 
                <GiDoubleDragon />
                <GiDragonBreath /> Welcome to Dominic's D&D Deli
            </h2>
            <p>Stock up on goods for your next quest!</p>
            <p>If you have an eye for bargains, register for our <b>special</b> program</p>
        </>
    )
}

export default HomePage;