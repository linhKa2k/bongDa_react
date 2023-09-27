import React from "react";

import ModalCommon from "../../../common/modal";
import "./modalStyle/welcomeStyle.scss";

export default function WelcomeModal(props) {
  const { isVisible, hideModal } = props;
  return (
    <ModalCommon
      isVisible={isVisible}
      onHideModal={hideModal}
      onClose={false}
      modalHeader={
        <div className="modal-header-lineup">
          <div className="title-header-lineup">
            <p className="text-title-header">
              Chào mừng bạn đến với <br /> Chợ chuyển nhượng
            </p>
          </div>
          <div className="info-header-lineup">
            <span className="text-info-header">+ CT$: 1,000,000</span>
          </div>
          <div className="button-header-lineup">
            <button onClick={hideModal} className="btn-header-lineup">
              OK
            </button>
          </div>
        </div>
      }
    ></ModalCommon>
  );
}
