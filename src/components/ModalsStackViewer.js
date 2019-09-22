import React, { useEffect } from 'react';
import { observer } from 'mobx-react'
import Modal from './Modal'

const ModalsStackViewer = ({ modalsStore }) => {
  console.log(modalsStore)
  const modals = modalsStore.modalsStack
  if(!modals.length) {
    return 'no modals!';
  }

  console.log(modals)
  return <div style={{position: 'relative', width: '100%', height: '50vh'}}>
    {modals.map((m) => <div key={m.name}>
      <div className="overlay" onClick={()=>modalsStore.closeModal()}/>
      <Modal name={m.name} config={m.config}/>
    </div>)}
  </div>
}

export default observer(ModalsStackViewer);