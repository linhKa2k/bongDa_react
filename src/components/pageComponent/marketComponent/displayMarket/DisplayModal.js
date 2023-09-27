import React from 'react'
import { Button } from "antd";

import "./DisplayModal.scss"
import ModalCommon from "../../../common/modal/index"
import { See_DetailPlayer } from "../../../../dataMockup/listMarket"

export default function DisplayModal(props) {
    const { isVisible, onHideModal } = props; 
 
    const listDataSeeDetail = See_DetailPlayer.map((items, key) => {
        return (
            <div key={key} >

                <div className="form-detailPlayer">
                    <p><span>{items.namePlayer}</span></p>
                    <p className="text-countryPlayer"><span>{items.Country}</span></p>
                    <p><span>{items.clothersNumber}</span></p>
                </div>
            </div>
        )
    });
    return (<div>
        <ModalCommon isVisible={isVisible} onHideModal={onHideModal} onClose={false}
        modalHeader={
            <div className="title-detailPlayerGroupA">
                <p><span>Chi tiết gói cầu thủ bảng A</span></p>
            </div>
        }
        modalContent={
            <div className="form-contentDetailPlayer">
                {listDataSeeDetail}
            </div>
        }
        modalFooter={
            <div className="form-btnBackDetailPlayer">
                <Button className="btn-backDetailPlayer" onClick={onHideModal}>
                    <div className="text-backDetailPlayer"><p><span>QUAY LẠI</span></p></div>
                </Button>
            </div>
        }
    /></div>)
}　
