import React from "react";

import { Mission } from "../../../../dataMockup/DataMission";
import Dollar from "../../../../assets/dollar-yellow.jpg";
import Card from "../../../common/Card";
import { useState } from "react";

import "../StyleMission.scss";
import ModalCardMission from "./modal/ModalCardMission";

export default function CardMission() {
  const [isVisible, setIsVisible] = useState(false);
  const handleText = (obj) => {
    if (obj.waiting !== true) {
      return "Nhận thưởng";
    } else if (obj.status !== true) {
      return "Thực hiện ngay";
    } else {
      return "Đã hoàn thành";
    }
  };
  const handleShowModal = (dataWaiting) => {
    if (dataWaiting === false) {
      setIsVisible(true);
    }
  };
  const handleHideModal = () => {
    setIsVisible(false);
  };
  let data = [];
  data = Mission.listMission.map((item, key) => {
    return (
      <div
        key={key}
        className="card-mission-container"
        style={
          item.status
            ? { backgroundColor: "rgba(119, 119, 119, 1)" }
            : { backgroundColor: "white" }
        }
      >
        <Card
          cardLeft={
            <div className="img-card">
              <img src={Dollar} alt="" />
              <p className="number-img">{item.reward}</p>
            </div>
          }
          cardContent={
            <div className="info-card">
              <p className="info-title">{item.title}</p>
              <p className="info-content">{item.info}</p>
              <p className="info-limit">{item.limit}</p>
            </div>
          }
          cardRight={
            <div className="button-card">
              <button
                className="btn-card"
                onClick={() => handleShowModal(item.waiting)}
                style={
                  item.waiting !== true
                    ? { backgroundColor: "rgba(191, 191, 191, 1)" }
                    : item.status !== true
                    ? { backgroundColor: "rgba(147, 144, 144, 1)" }
                    : { backgroundColor: "rgba(72, 70, 70, 1)" }
                }
              >
                {handleText({ waiting: item.waiting, status: item.status })}
              </button>
            </div>
          }
        ></Card>
        <ModalCardMission
          isVisible={isVisible}
          hideModal={handleHideModal}
          setIsVisible={setIsVisible}
        />
      </div>
    );
  });
  return <div>{data}</div>;
}
