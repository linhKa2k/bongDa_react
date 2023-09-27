/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState } from "react";
import { Button, Image } from "antd";

import { superStarCollection } from "../../../../../dataMockup/listGift";
import img from "../../../../../asset/iPhone 14 .png";
import CommonCard from "../../../../common/Card";
import GiftModal from "../../giftModal";
import "../../giftStyle/listSuperStar.scss";

export default function listSuperStar() {
  const [isGiftModal, setIsGiftModal] = useState(false);
  const handleOpenGiftModal = () => {
    setIsGiftModal(!isGiftModal);
  };

  const dataSuperStar = superStarCollection?.map((item, key) => {
    return (
      <div key={key}>
        <CommonCard
          cardContent={
            <div
              style={item.owned ? { backgroundColor: "#D1D1D1" } : null}
              className="content-left"
            >
              <div>
                <Image
                  className="img-player"
                  src={item.avatar}
                  preview={false}
                />
              </div>
              <div className="name-player-container">
                <p className="name-player">{item.player}</p>
              </div>
              <div>
                <p className="name-owned">
                  {item.owned ? "Đã sở hữu" : "Chưa có"}
                </p>
              </div>
            </div>
          }
        />
      </div>
    );
  });
  return (
    <div className="superstar-container">
      <GiftModal isVisible={isGiftModal} onModal={handleOpenGiftModal} />
      <div className="title-header-container">
        <CommonCard
          cardHeader={
            <div className="title-header">
              <p>BỘ SƯU TẬP 8 SIÊU SAO - ĐỔI NGAY IPHONE</p>
            </div>
          }
        />
      </div>
      <div className="content-container">
        <CommonCard
          cardRight={
            <div className="content-right">
              <p className="text-reward">Số lượng còn lại: 8</p>
              <Image className="img-reward" src={img} preview={false} />
              <p className="text-reward">Iphone 14</p>
              <Button className="btn-reward" onClick={handleOpenGiftModal}>Đổi ngay</Button>
            </div>
          }
        />
        <div className="list-superstar">{dataSuperStar}</div>
      </div>
    </div>
  );
}
