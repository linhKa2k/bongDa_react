import React from 'react'

import "./DisplayModalTopRanking.scss" 
import ModalCommon from "../../../common/modal/index"
 
export default function DisplayModalTopRanking(props) {
    const { isVisible, hideModal } = props;
    return (
        <ModalCommon isVisible={isVisible} onHideModal={hideModal} onClose={true}

            modalHeader={
                <div className="title-detailPlayerGroupA"><p><span>Phần thưởng xếp hạng</span></p></div>
            }
            modalContent={
                <div className="form-contentTopRanking">
                    <div className="form-topRanking">
                        <p className="text-topRanking"><span>Top 1-10: 100.000 CT$</span></p>
                        <p className="text-topRanking"><span>Top 10%: 20.000 CT$</span></p>
                        <p className="text-topRanking"><span></span>Top 30%: 10.000 CT$</p>
                        <p className="text-topRanking"><span></span>Top 60%: 5.000 CT$</p>
                        <p className="text-topRanking"><span></span>Top 60%: 5.000 CT$</p>
                    </div>
                </div>
            }
        >
        </ModalCommon>
    )
}