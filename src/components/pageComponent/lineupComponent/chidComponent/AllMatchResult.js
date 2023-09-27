import React from "react";
import { Button, Col, Image, Row, Typography } from "antd";

import Card from "../../../common/Card";
import "../lineupStyle/allMatchResult.scss";

import { latestResult } from "../../../../dataMockup/listLineUp";
export default function AllMatchResult() {
  const MatchResult = latestResult.map((item, index) => {
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
  const match = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const allMatchResult = match.map((match) => {
    return (
      <div className="match_result" key={match.toString()}>
        <Card
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
              <Button>Xem thêm</Button>
            </>
          }
        />
      </div>
    );
  });

  return (
    <div className="all_match_result">
      <Card
        cardHeader={
          <div className="all_match_result-title">
            <Typography.Text>Các trận trước đây</Typography.Text>
          </div>
        }
        gridFooter={24}
        cardFooter={<>{allMatchResult}</>}
      />
    </div>
  );
}
