/* eslint-disable react-hooks/rules-of-hooks */
import React from "react";
import { Image, Button } from "antd";
import { useState } from "react";

import GiftModal from "../giftModal";
import CommonCard from "../../../common/Card";
import { Gift } from "../../../../dataMockup/listGift";
import "../giftStyle/giftScreen.scss";

export default function giftScreen() {
  const [isGiftModal, setIsGiftModal] = useState(false);
  const [isGiftScreen, setIsGiftScreen] = useState(false);
  const handleOpenGiftModal = () => {
    setIsGiftModal(!isGiftModal);
    setIsGiftScreen(!isGiftScreen);
  };
  const giftData = Gift?.map((item, key) => {
    return (
      <div key={key} className="gift-container">
        <CommonCard
          cardLeft={
            <div>
              <Image className="img-gift" src={item.avatar} preview={false} />
            </div>
          }
          cardContent={
            <div className="title-container">
              <p className="gift-title">{item.title}</p>
              <p className="gift-date">{item.dateTime}</p>
            </div>
          }
          cardRight={
            <div>
              <Button onClick={handleOpenGiftModal} className="btn-detail">
                Chi tiết
              </Button>
            </div>
          }
          gridLeft={6}
          gridContent={12}
          gridRight={6}
        />
      </div>
    );
  });
  return (
    <div className="gift-data">
      <GiftModal
        isVisible={isGiftModal}
        onModal={handleOpenGiftModal}
        isGiftScreen={isGiftScreen}
      />
      <div>{giftData}</div>
    </div>
  );
}
