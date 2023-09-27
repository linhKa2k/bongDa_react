import { Tabs } from "antd";
import React from "react";

import GiftScreen from "./giftScreen/index";
import CollectionScreen from "./collectionScreen/index";
import "../giftComponent/giftStyle/giftComponent.scss";

export default function index() {
  const onChange = () => {};

  const items = [
    {
      label: "Giỏ quà",
      children: <GiftScreen />,
      key: 1,
    },
    {
      label: "Bộ sưu tập",
      children: <CollectionScreen />,
      key: 2,
    },
  ];
  return (
    <div>
      <Tabs
        defaultActiveKey={1}
        key={2}
        type="card"
        className="tab-container"
        items={items}
        onChange={onChange}
      />
    </div>
  );
}
