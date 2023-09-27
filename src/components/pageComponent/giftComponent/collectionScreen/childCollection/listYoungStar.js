import { Button, Image } from "antd";
import React from "react";

import { youngStarCollection } from "../../../../../dataMockup/listGift";
import img from "../../../../../asset/two tickets.png";
import CommonCard from "../../../../common/Card";
import "../../giftStyle/listYoungStar.scss";

export default function listYoungStar() {
  const dataYoungStar = youngStarCollection?.map((item, key) => {
    return (
      <div key={key}>
        <CommonCard
          cardContent={
            <div style={item.Owned ? {backgroundColor: "#D1D1D1"} : null} className="content-left">
              <div>
                <Image className="img-player" src={item.avatar} preview={false} />
              </div>
              <div className="name-player-container">
                <p className="name-player">{item.Player}</p>
              </div>
              <div>
                <p className="name-owned">{item.Owned ? "Đã sở hữu" : ""}</p>
              </div>
            </div>
          }
        />
      </div>
    );
  });
  return (
    <div className="youngstar-container">
      <div className="title-header-container">
        <CommonCard
          cardHeader={
            <div className="title-header">
              <p>BỘ SƯU TẬP CẦU THỦ TRẺ TRIỂN VỌNG - NHẬN NGAY VOUCHER</p>
            </div>
          }
        />
      </div>
      <div className="content-container">
        <CommonCard
          cardRight={
            <div className="content-right">
              <Image className="img-reward" src={img} preview={false} />
              <p className="text-reward">Voucher 200k</p>
              <Button className="btn-reward" disabled>Đã đổi</Button>
            </div>
          }
        />
        <div className="list-young-star">{dataYoungStar}</div>
      </div>
    </div>
  );
}
