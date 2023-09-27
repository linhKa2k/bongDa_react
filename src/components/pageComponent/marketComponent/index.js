import React, { useState } from 'react'
import { Button } from "antd";

import "./marketStyle.scss"
import CardCommon from "../../common/Card" 
import FormModal from "./displayMarket/DisplayModal"
import cau_thu from '../../../asset/shirt-market.png'
import { openPlayer } from "../../../dataMockup/listMarket"
import ModalOpenPlayer from "./displayMarket/DisplayModalSeeDetail"

export default function MarketComponent() {

    const [isVisible, setIsVisible] = useState(false)
    const [isVisibleSeeDetail, setIsVisibleSeeDetail] = useState(false)

    const showModal = () => { setIsVisible(true) }
    const hideModal = () => { setIsVisible(false) }
    const showModalSeeDetail = ()=>{ setIsVisibleSeeDetail(true) }
    const hideModalSeeDetail = ()=>{ setIsVisibleSeeDetail(false) }

    const listData = openPlayer.map((item, key) => {
        return (
            <div key={key} className="form-mainMarket">

                <CardCommon
                    cardLeft={
                        <div className="left-market">
                            <Button className="btn-detailMarket" onClick={showModal} ><p> <span className="text-detalMarket">Chi tiết</span></p></Button>
                        </div>
                    }
                    cardContent={
                        <div className="content-market">
                            <img src={cau_thu} alt="" />
                        </div>
                    }
                    cardRight={
                        <div className="right-market">
                            <div className="title-listPlayer">
                                <p><span className="text-listPlayerMarket">CÁC CẦU THỦ BẢNG A</span></p>
                            </div>
                            <div className="btn-openPlayerMarket">
                                <Button className="btn-opePlayer" onClick={showModalSeeDetail}>
                                    <p> <span className="text-openMarket">CHIÊU MỘ NGAY </span><br /> <span className="text-moneyMarket">{item.price}</span> </p>
                                </Button>
                            </div>
                        </div>
                    }
                />
            </div>
        )
    });
    return (
        <div className='market'>{listData}
            <FormModal isVisible={isVisible} onHideModal={hideModal} />
            <ModalOpenPlayer isVisibleSeeDetail={isVisibleSeeDetail} handleCancel={hideModalSeeDetail} />
        </div>
    )
}
