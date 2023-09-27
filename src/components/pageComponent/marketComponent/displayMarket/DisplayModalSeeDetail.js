import React from 'react'
import { Button, Modal } from "antd";

import "./DisplayModalSeeDetail.scss"
import ItemPlayer from "./DisplayItemPlayer"
import Voucher from "../../../../asset/voucher.png"

export default function DisplayModalSeeDetail(props) {
    const { isVisibleSeeDetail, handleCancel } = props;
    return (
        <Modal open={isVisibleSeeDetail} onCancel={handleCancel} closable={false} footer={null}>
            <div className="form-modalSeeDetail">
                <div className="title-openPlayer">
                    <div className="text-openPlayer"><p><span>Cầu thủ mở được</span></p></div>
                </div>
                <div className="form-player">
                    <div className="form-playerTop">
                        <ItemPlayer />
                        <ItemPlayer />
                        <ItemPlayer /> 
                    </div>
                    <div className="form-playerBottom">
                    <ItemPlayer />
                    <ItemPlayer />
                    </div>
                </div>
                <div className="title-reward">
                    <div className="text-reward"><p><span>Cầu thủ mở được</span></p></div>
                </div>
                <div className="form-voucher">
                    <div className="form-imgVoucher"> <img src={Voucher} /> </div>
                    <div className="title-voucher">
                        <p><span>Voucher 20k</span></p>
                    </div>
                </div>

                <div className="form-btnFooter">
                    <Button className="btn-backOpenPlayer" onClick={handleCancel}>
                        <div className="text-backOpenPlayer">
                            <p><span>QUAY LẠI</span></p>
                        </div>
                    </Button>
                    <Button className="btn-keepOpenPlayer" onClick={handleCancel}>
                        <div className="text-keepOpenPlayer">
                            <p><span className="text-keepOpenPlayerTop">MỞ TIẾP</span><br /><span className="text-keepOpenPlayerBottom">CT$: 3,500</span></p>
                        </div>
                    </Button>
                </div>
            </div>
        </Modal>
    )
} 