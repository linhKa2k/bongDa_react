import React from "react";
import { Button, Col, Image, Row, Typography } from "antd";
import { useNavigate } from "react-router-dom";

import Card from "../../../common/Card";
import "../lineupStyle/matchResult.scss";

export default function MatchResult(props) {
  const { data } = props;
  const navigate = useNavigate();
  const handleSeeMore = () => {
    navigate("allMatchResult");
  };

  const MatchResult = data.map((item, index) => {
    return (
      <Card
        key={index}
        cardHeader={
          <>
            <Image src={item.avatar} preview={false} />
          </>
        }
        cardContent={<>{item.player}</>}
        cardFooter={<>{item.pointPlayer}</>}
      />
    );
  });
  return (
    <div className="match_result">
      <Card
        cardHeader={
          <div className="match_result-title">KẾT QUẢ TRẬN GẦN NHẤT</div>
        }
        gridLeft={17}
        cardLeft={
          <>
            <Card
              gridHeader={24}
              cardHeader={
                <div className="match_result-container">{MatchResult}</div>
              }
              cardFooter={
                <div className="match_result-total_points">
                  <Typography.Text>Tổng điểm: 48.5</Typography.Text>
                </div>
              }
            />
          </>
        }
        gridRight={7}
        cardRight={
          <>
            <Row className="match_result-country">
              <Col span={10.5}>
                <Image
                  src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
                  preview={false}
                />
                <div>
                  <Typography.Text>Nhật Bản</Typography.Text>
                </div>
              </Col>
              <Col span={4}>
                <Typography.Text>Vs</Typography.Text>
              </Col>
              <Col span={10.5}>
                <Image
                  src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
                  preview={false}
                />
                <div>
                  <Typography.Text>Hàn Quốc</Typography.Text>
                </div>
              </Col>
            </Row>
            <Button onClick={handleSeeMore}>Xem thêm</Button>
          </>
        }
      />
    </div>
  );
}
