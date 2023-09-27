import React from "react";
import { Col, Image, Row, Typography } from "antd";

import Card from "../../../common/Card";
import "../lineupStyle/currentLineup.scss";

export default function CurrentLineup(props) {
  const { data } = props;
  const currentLineUp = data.map((item, index) => {
    return (
      <Col span={4} key={index} className="card_item">
        <Card
          cardHeader={
            <>
              <Image src={item.avatar} preview={false} />
            </>
          }
          cardFooter={<>{item.player}</>}
        />
      </Col>
    );
  });
  return (
    <div className="current_lineup">
      <Card
        cardHeader={
          <>
            <Typography.Text>ĐỘI HÌNH HIỆN TẠI</Typography.Text>
          </>
        }
        cardFooter={
          <Row className="current_lineup-container">{currentLineUp}</Row>
        }
      />
    </div>
  );
}
