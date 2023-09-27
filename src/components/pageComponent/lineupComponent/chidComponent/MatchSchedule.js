import React from "react";
import { Button, Col, Image, Row, Typography } from "antd";

import Card from "../../../common/Card";
import "../lineupStyle/matchSchedule.scss";

export default function MatchSchedule(props) {
  const { onViewResult } = props;
  return (
    <div className="match_schedule" onClick={onViewResult}>
      <Card
        cardHeader={
          <Row>
            <Col span={14} className="card_border">
              <Typography.Text>LỊCH SỬ THI ĐẤU NGÀY 23/11</Typography.Text>
            </Col>
            <Col span={10} className="card_border">
              <Typography.Text>TRẬN GẦN NHẤT</Typography.Text>
            </Col>
          </Row>
        }
        gridLeft={14}
        cardLeft={
          <>
            <Button type="text">20h30: Nhật Bản - Hàn Quốc</Button>
            <Button type="text">21h30: Nhật Bản - Hàn Quốc</Button>
            <Button type="text">22h30: Nhật Bản - Hàn Quốc</Button>
            <Button type="text">23h30: Nhật Bản - Hàn Quốc</Button>
          </>
        }
        gridRight={10}
        cardRight={
          <>
            <Row className="match_schedule-country">
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
            <Row className="match_schedule-point--container">
              <Col span={10}>
                <Typography.Text className="match_schedule-point">
                  0
                </Typography.Text>
              </Col>
              <Col span={4}>
                <Typography.Text className="match_schedule-point">
                  -
                </Typography.Text>
              </Col>
              <Col span={10}>
                <Typography.Text className="match_schedule-point">
                  0
                </Typography.Text>
              </Col>
            </Row>
            <Row>
              <Col span={24} className="card_border-point">
                Bắt đầu trong: 32m30s
              </Col>
            </Row>
          </>
        }
      />
    </div>
  );
}
