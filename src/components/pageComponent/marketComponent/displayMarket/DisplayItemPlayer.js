import React from 'react'

import "./DisplayModalSeeDetail.scss"
import Player from "../../../../asset/shirt.png"

export default function ItemPlayer() {
    return (
        <div className="form-playerDetail">
            <div className="form-playerImg">
                <img src={Player} alt="player" />
            </div> 
            <div className="text-playerImg">
                <p><span>Cr.Ronaldo</span></p>  
            </div>
            <div className="text-playerImg">
                <p><span>Bồ đào nha</span></p>
            </div>
        </div>
    )
}