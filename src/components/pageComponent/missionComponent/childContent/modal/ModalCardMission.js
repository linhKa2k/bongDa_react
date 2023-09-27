import React from 'react'

import ModalCommon from '../../../../common/modal/index'

export default function ModalCardMission(props) {
    const { isVisible, hideModal } = props; 
  return (
        <ModalCommon isVisible={isVisible} onHideModal={hideModal} onClose={false}
        modalHeader={
            <div className='modal-header-mission'>
                <div className='title-header-modal'>
                    <p className='text-title-header'>Điểm danh thành công</p>
                </div>
                <div className='info-header-modal'>
                    <p className='text-info-header'>+ CT$: 1,000</p>
                </div>
                <div className='button-header-modal'>
                    <button onClick={hideModal} className='btn-header-modal'>OK</button>
                </div>
            </div>
        }

        >
        </ModalCommon>
  )
}
