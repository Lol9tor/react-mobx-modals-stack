import { observable, action, decorate } from 'mobx'

class ModalsStacker {
  modalsStack = []

  addModal = (cfg) => {
    this.modalsStack.push(cfg)
  }

  closeModal = () => {
    this.modalsStack.pop()
  }

  closeAllModals = () => {
    this.modalsStack = []
  }
}

const decorated = decorate(ModalsStacker, {
  modalsStack: observable,
  addModal: action,
  closeModal: action,
  closeAllModals: action
})

export default new decorated()