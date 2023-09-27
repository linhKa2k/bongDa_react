import React from "react";
import { Switch } from "antd";

import ModalCommon from "../../modal";

import './ModalStyle/styleOptionModal.scss';

export default function OptionsModal(props) {
  const { isVisible, onModal } = props;
  const onChange = () => {};
  return (
    <ModalCommon
      isVisible={isVisible}
      onHideModal={onModal}
      onClose={true}
      modalHeader={
        <div className="header-modal-option">
          <div className="title-header-option">
            <p className="text-option">Tuỳ chỉnh</p>
          </div>
          <div className="body-modal-option ">
            <p className="text-body-option">Nhạc game </p>
            <Switch
              className="btn-body-option"
              defaultChecked
              onChange={onChange}
              checkedChildren="Mở"
              unCheckedChildren="Tắt"
            />
          </div>
          <div className="footer-modal-option">
            <p className="text-footer-option">Âm thanh</p>
            <Switch
              className="btn-footer-option"
              defaultChecked
              onChange={onChange}
              checkedChildren="Mở"
              unCheckedChildren="Tắt"
            />
          </div>
        </div>
      }
    ></ModalCommon>
  );
}
