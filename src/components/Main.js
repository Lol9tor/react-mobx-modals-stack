import React, { useEffect } from 'react'
import BasicModal from './BasicModal'

export default function Main({modalsStore}) {
  useEffect(() => {
    setTimeout(()=>{
      modalsStore.addModal({
        name:'basic modal:'+Date.now(),
         config: {content: <BasicModal openNewModal={modalsStore.addModal} closeAll={modalsStore.closeAllModals}/>}
        })
    }, 3000)
  }, [])
  return <div>
    <h2>Main page</h2>
    <p>
      lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum
      lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsumlorem ipsum 
      lorem ipsumlorem ipsum lorem ipsum lorem ipsum lorem ipsum
    </p>  
    <p>
      lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum
      lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsumlorem ipsum 
      lorem ipsumlorem ipsum lorem ipsum lorem ipsum lorem ipsum
    </p> 
    <button 
      onClick={() => modalsStore.addModal({
        name:'basic modal:'+Date.now(),
         config: {content: <BasicModal openNewModal={modalsStore.addModal} closeAll={modalsStore.closeAllModals}/>}
        })}
    >
      Open modal
    </button>
    <button 
      onClick={() => modalsStore.closeModal()}
    >
      Close modal
    </button>
  </div>
}