import React from "react";
import { Col, Image, Row, Select } from "antd";

import Card from "../../../common/Card";
import "../lineupStyle/PlayerCollection.scss";

export default function PlayerCollection(props) {
  const { data } = props;
  const selectedOptions = [
    {
      value: "all",
      label: "Tất cả",
    },
    {
      value: "today",
      label: "Đội tham gia hôm nay",
    },
    {
      value: "with",
      label: "Sẽ tham gia hôm nay",
    },
  ];
  const PlayerCollection = data.map((item, index) => {
    return (
      <Col key={index} span={4.5} className="card_item">
        <Card
          cardHeader={
            <>
              <Image src={item.avatar} preview={false} />
            </>
          }
          cardContent={<>{item.player}</>}
          cardFooter={<>{item.country}</>}
        />
      </Col>
    );
  });
  return (
    <div className="player_collection">
      <Card
        gridHeader={24}
        cardHeader={
          <Row>
            <Col span={12}>BỘ SƯU TẬP CẦU THỦ</Col>
            <Col span={12}>
              <Select defaultValue="all" options={selectedOptions} />
            </Col>
          </Row>
        }
        cardFooter={
          <Row className="player_collection-container">{PlayerCollection}</Row>
        }
      />
    </div>
  );
}
