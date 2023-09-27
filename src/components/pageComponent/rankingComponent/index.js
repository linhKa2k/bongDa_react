import React,{ useState } from 'react'
import { QuestionCircleOutlined } from '@ant-design/icons';

import "./rankingStyle.scss"
import TableData from "./displayRanking/Table"
import Slider from "./displayRanking/DisplaySliderRanking"
import ModalSeeDetail from "./displayRanking/DisplayModalTopRanking"

export default function RankingPage() {
    const [isVisible, setIsVisible] = useState(false)
    const showModal = () => { setIsVisible(true) }
    const hideModal = () => { setIsVisible(false) }


    return (
        <div className="form-mainRanking">
            <ModalSeeDetail isVisible={isVisible} hideModal={hideModal} />
            <div className="top-ranking">
                <div className="title-topRanking"><p><span >Bảng xếp hạng Fantasy point </span></p></div>
                <div className="slider-topRanking">
                    <Slider />
                </div>
            </div>
            <div className="content-ranking">
                <div className="content-tableRanking">
                    <TableData />
                </div>
            </div>
            <div className="footer-ranking">
                <div className="titleMyRank-bottomRanking">
                    <div><p><span>Rank của bạn</span></p></div>
                </div>

                <div className="form-rating">
                    <div className="title-ratingRanking">
                        <div><p><span>10%</span></p></div>
                        <div><p><span>Nguyen Van A</span></p></div>
                        <div><p><span>231</span></p></div>
                    </div>
                </div>

                <div className="form-bottomRanking">
                    <div className="titleLeft-bottomRanking">
                        <div><p><span className="title-myRewardBottom">Phần thưởng hiện tại của bạn</span></p></div>
                        <div><p><span className="title-myRatingBottom">Top 10%: 10.000 CT$</span></p></div>
                    </div>
                    <div className="icon-bottomRanking">
                        <QuestionCircleOutlined className="iconQuestion" onClick={showModal} />
                    </div>
                </div>
            </div>
        </div>

    )
}
