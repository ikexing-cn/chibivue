import type { RendererOptions } from '../runtime-core'

export const nodeOps: RendererOptions<Node> = {
  createElement(type) {
    return document.createElement(type)
  },
  createText(text) {
    return document.createTextNode(text)
  },
  setElementText(node, text) {
    node.textContent = text
  },
  insert(child, parent, anchor) {
    parent.insertBefore(child, anchor || null)
  },
}
