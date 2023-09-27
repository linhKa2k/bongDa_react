import React, { useState } from "react";
import { Col, Row, Avatar, Button, Typography, Dropdown } from "antd";
import { useNavigate, useLocation } from "react-router-dom";

import {
  UserOutlined,
  MenuOutlined,
  PlusOutlined,
  LeftOutlined,
} from "@ant-design/icons";

import OptionsModal from "./TopBarModal/OptionsModal";
import RulesModal from "./TopBarModal/RulesModal";
import "./TopBarStyle.scss";

export default function TopBar() {
  const currentPath = useLocation();
  const navigate = useNavigate();
  const handleBack = () => {
    navigate(-1);
  };
  const [isOptional, setOptional] = useState(false);
  const [isRules, setRules] = useState(false);
  const handleOptionsModal = () => {
    setOptional(!isOptional);
  };
  const handleRulesModal = () => {
    setRules(!isRules);
  };
  const handleMenu = (event) => {
    if (event?.key === "Options") {
      setOptional(!isOptional);
    } else if (event?.key === "Rules") {
      setRules(!isRules);
    }
  };
  const items = [
    { label: "Tùy chỉnh", key: "Options" },
    { label: "Thể lệ", key: "Rules" },
    { label: "Thoát", key: "Exit" },
  ];
  const menuProps = {
    items,
    onClick: handleMenu,
  };
  return (
    <>
      {currentPath.pathname !== "/cho-tot/lineup/allMatchResult" ? (
        <Row className="top_bar">
          <OptionsModal isVisible={isOptional} onModal={handleOptionsModal} />
          <RulesModal isVisible={isRules} onModal={handleRulesModal} />
          <Col span={4}>
            <Avatar
              shape="square"
              size={56}
              icon={<UserOutlined />}
              className="top_bar-avatar"
            />
          </Col>
          <Col span={16}>
            <Row className="top_bar-center align-center">
              <Col span={12} className="top_bar-in_for">
                <Typography.Text>My name is Wind</Typography.Text>
                <Typography.Text>Điểm hôm nay: 0000</Typography.Text>
              </Col>
              <Col span={12} className="top_bar-money">
                <Typography.Text>CT$: 3,500,000</Typography.Text>
                <Button
                  className="top_bar-plusBtn"
                  icon={<PlusOutlined className="top_bar-plus_icon" />}
                />
              </Col>
            </Row>
          </Col>
          <Col span={4} className="top_bar-right">
            <Dropdown
              menu={menuProps}
              placement="bottomRight"
              onClick={(e) => handleMenu(e)}
            >
              <Button icon={<MenuOutlined className="top_bar-menu_icon" />} />
            </Dropdown>
          </Col>
        </Row>
      ) : (
        <Row className="back_bar">
          <Col span={4}>
            <Button icon={<LeftOutlined />} onClick={handleBack} />
          </Col>
          <Col span={20}>
            <Typography.Text>KẾT QUẢ</Typography.Text>
          </Col>
        </Row>
      )}
    </>
  );
}
