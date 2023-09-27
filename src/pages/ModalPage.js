import React from "react";
import Modal from "../components/common/modal/index";

export default function ModalPage() {
    return (
      <Modal
        modalHeader={<p>Layout</p>}
        modalLeft={<p>cardLeft</p>}
        modalContent={<p>cardContent</p>}
        modalRight={<p>cardRight</p>}
        modalFooter={<p>cardFooter</p>}
        >
      </Modal>
    );
  }