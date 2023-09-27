import React from "react";

import ModalCommon from "../../modal";

import "../TopBarModal/ModalStyle/styleRulesModal.scss";

export default function RulesModal(props) {
  const { isVisible, onModal } = props;
  return (
    <ModalCommon
      isVisible={isVisible}
      onHideModal={onModal}
      onClose={false}
      modalHeader={
        <div className="header-modal-rules">
          <div className="title-header-rules">
            <p>Thể lệ</p>
          </div>
          <div className="body-modal-rules">
            <p className="info-body-rules">
              "Ngày trúng giải: 18/7/2022 Ngày trúng giải: 18/7/2022Ngày trúng
              giải: 18/7/2022Ngày trúng giải: 18/7/2022Ngày trúng giải:
              18/7/2022Ngày trúng giải: 18/7/2022Ngày trúng giải: 18/7/2022Ngày
              trúng giải: 18/7/2022Ngày trúng giải: 18/7/2022Ngày trúng giải:
              18/7/2022Ngày trúng giải: 18/7/2022Ngày trúng giải: 18/7/2022Ngày
              trúng giải: 18/7/2022Ngày trúng giải: 18/7/2022Ngày trúng giải:
              18/7/2022Ngày trúng giải: 18/7/2022Ngày trúng giải: 18/7/2022Ngày
              trúng giải: 18/7/2022Ngày trúng giải: 18/7/2022Ngày trúng giải:
              18/7/2022Ngày trúng giải: 18/7/2022Ngày trúng giải: 18/7/2022Ngày
              trúng giải: 18/7/2022Ngày trúng giải: 18/7/2022Ngày trúng giải:
              18/7/2022Ngày trúng giải: 18/7/2022Ngày trúng giải: 18/7/2022Ngày
              trúng giải: 18/7/2022Ngày trúng giải: 18/7/2022Ngày trúng giải:
              18/7/2022Ngày trúng giải: 18/7/2022Ngày trúng giải: 18/7/2022Ngày
              trúng giải: 18/7/2022Ngày trúng giải: 18/7/2022Ngày trúng giải:
              18/7/2022Ngày trúng giải: 18/7/2022Ngày trúng giải: 18/7/2022Ngày
              trúng giải: 18/7/2022Ngày trúng giải: 18/7/2022Ngày trúng giải:
              18/7/2022Ngày trúng giải: 18/7/2022Ngày trúng giải: 18/7/2022Ngày
              trúng giải: 18/7/2022Ngày trúng giải: 18/7/2022Ngày trúng giải:
              18/7/2022Ngày trúng giải: 18/7/2022Ngày trúng giải: 18/7/2022Ngày
              trúng giải: 18/7/2022Ngày trúng giải: 18/7/2022Ngày trúng giải:
              18/7/2022"
            </p>
          </div>
          <div className="footer-modal-rules">
            <button onClick={onModal} className="btn-footer-modal">
              OK
            </button>
          </div>
        </div>
      }
    ></ModalCommon>
  );
}
