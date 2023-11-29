import type { Props } from './componentProps'
import type { ReactiveEffect } from '../reactivity'
import type { VNode, VNodeChild } from './vnode'
import type { ComponentOptions } from './componentOptions'

export type Component = ComponentOptions
export type Data = Record<string, unknown>

export interface ComponentInternalInstance {
  type: Component // The original user-defined component (old rootComponent (actually not just the root component))
  vnode: VNode // To be explained later
  subTree: VNode // Old n1
  next: VNode | null // Old n2
  effect: ReactiveEffect // Old effect
  render: InternalRenderFunction // Old componentRender
  update: () => void // Old updateComponent
  isMounted: boolean
  propsOptions: Props
  props: Data
}

export type InternalRenderFunction = {
  (): VNodeChild
}

export function createComponentInstance(
  vnode: VNode,
): ComponentInternalInstance {
  const type = vnode.type as Component

  const instance: ComponentInternalInstance = {
    type,
    vnode,
    next: null,
    effect: null!,
    subTree: null!,
    update: null!,
    render: null!,
    isMounted: false,
    propsOptions: type.props || {},
    props: {},
  }

  return instance
}
