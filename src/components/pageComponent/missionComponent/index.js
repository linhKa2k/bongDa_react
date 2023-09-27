import React from "react";

import {Mission} from '../../../dataMockup/DataMission'

import CardMission from "./childContent/CardMission";
import "./StyleMission.scss";

export default function MissionComponent() {
  return (
    <div className="mission-component">
      <div className="header-mission">
        <p className="title-header">NHIỆM VỤ</p>
        <p className="info-header">
          Thực hiện nhiệm vụ ngay để có thêm Xu Tốt chiêu mộ các cầu thủ nhé!
        </p>
      </div>
      <div className="body-mission">
        <div className="time-mission">
          <p className="info-time">Làm mới sau: {Mission.time.timeReset}</p>
        </div>
        <div className="card-mission">
          <CardMission className="child-card-mission" />
        </div>
      </div>
    </div>
  );
}
