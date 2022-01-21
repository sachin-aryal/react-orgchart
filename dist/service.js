

Object.defineProperty(exports, "__esModule", {
  value: true
})
exports.selectNodeService = exports.dragNodeService = void 0

const _rxjs = require("rxjs")

const subject1 = new _rxjs.Subject()
const subject2 = new _rxjs.Subject()
const dragNodeService = {
  sendDragInfo: function sendDragInfo(id) {
    return subject1.next({
      draggedNodeId: id
    })
  },
  clearDragInfo: function clearDragInfo() {
    return subject1.next()
  },
  getDragInfo: function getDragInfo() {
    return subject1.asObservable()
  }
}
exports.dragNodeService = dragNodeService
const selectNodeService = {
  sendSelectedNodeInfo: function sendSelectedNodeInfo(id) {
    return subject2.next({
      selectedNodeId: id
    })
  },
  clearSelectedNodeInfo: function clearSelectedNodeInfo() {
    return subject2.next()
  },
  getSelectedNodeInfo: function getSelectedNodeInfo() {
    return subject2.asObservable()
  }
}
exports.selectNodeService = selectNodeService
