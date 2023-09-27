/* eslint-disable react-hooks/rules-of-hooks */
import React, { useEffect, useState } from "react";
import { Button, Image } from "antd";

import CommonModal from "../../../common/modal";
import img from "../../../../asset/iphone 14prm.png";
import "../giftStyle/giftModal.scss";

export default function index(props) {
  const { isVisible, onModal, isGiftScreen } = props;
  const [isDetail, setIsDetail] = useState(false);
  const handleDetail = () => {
    setIsDetail(!isDetail);
  };
  useEffect(() => {
    if (isGiftScreen) {
      setIsDetail(!isDetail);
    }
    if (isVisible === false) {
      setIsDetail(false);
    }
  }, [isGiftScreen, isVisible]);
  return (
    <CommonModal
      isVisible={isVisible}
      onClose={false}
      modalHeader={
        <div className="modal-title-container">
          {isDetail ? (
            <span className="modal-title">Iphone 14</span>
          ) : (
            <span className="modal-title">
              Chúc mừng bạn đã đổi thưởng thành công Iphone 14
            </span>
          )}
        </div>
      }
      modalContent={
        <div className="gift-modal-content">
          <Image src={img} preview={false} />
          {isDetail ? (
            <div className="modal-detail-container">
              <span>Ngày trúng giải:</span>
              <span>18/07/2022</span>
              <p>
                Bạn đã nhận được mã thưởng, Chotot sẽ liên hệ với bạn để trao
                quà vào xx/xx/xxxx
              </p>
            </div>
          ) : (
            <></>
          )}
        </div>
      }
      modalFooter={
        <div className="btn-modal">
          {isDetail ? (
            <Button onClick={onModal}>Quay về giỏ quà</Button>
          ) : (
            <>
              <Button onClick={onModal}>Thoát</Button>
              <Button onClick={handleDetail}>Xem chi tết</Button>
            </>
          )}
        </div>
      }
    />
  );
}
