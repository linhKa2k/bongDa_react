import React from 'react';
import { Modal, Col, Row } from 'antd';
 
import "./ModalStyle.scss"

export default function ModalCommon(props) {
    const { isVisible, onHideModal, onClose, modalHeader, modalLeft, modalContent, modalRight, modalFooter, gridModalHeader, gridModalLeft, gridModalContent, gridModalRight, gridModalFooter } = props;
    return (
        <>
            <Modal open={isVisible} onCancel={onHideModal} closable={onClose} footer={null}>
                <Row className="main-modal">
                    <Row className="modal-header">
                        <Col className="header-modal" span={gridModalHeader}>{modalHeader}</Col>
                    </Row>
                    <Row className="modal-content">
                        <Col className="modal-left" span={gridModalLeft}>{modalLeft}</Col>
                        <Col className="modal-center" span={gridModalContent}>{modalContent}</Col>
                        <Col className="modal-right" span={gridModalRight}>{modalRight}</Col>
                    </Row>
                    <Row className="modal-footer" >
                        <Col className="footer-modal" span={gridModalFooter}>{modalFooter}</Col>
                    </Row>
                </Row>
            </Modal>
        </>
    );
};
