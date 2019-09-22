import React from 'react'

export default function BasicModal({ openNewModal, closeAll }) {
  return <div className='basic-modal'>
    <p>I am basic modal</p> 
    <p 
      onClick={()=>openNewModal({
        name: 'new modal',
        config: {content: <div><p>NEW MODAL!!!!</p><i onClick={closeAll}>close all modals</i></div>}
      })}>
      <b>Open new modal!</b>
    </p>
  </div>
}