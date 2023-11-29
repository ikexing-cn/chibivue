import { reactive } from '../reactivity'
import type { ComponentInternalInstance, Data } from './component'

export type Props = Record<string, PropOptions | null>

export interface PropOptions<T = any> {
  type?: PropType<T> | true | null
  required?: boolean
  default?: null | undefined | object
}

export type PropType<T> = { new (...args: any[]): T & {} }

export function initProps(
  instance: ComponentInternalInstance,
  rawProps: Data | null,
) {
  const props: Data = {}
  setFullProps(instance, rawProps, props)
  instance.props = reactive(props)
}

export function setFullProps(
  instance: ComponentInternalInstance,
  rawProps: Data | null,
  props: Data,
) {
  const options = instance.propsOptions

  if (rawProps) {
    Object.entries(rawProps).forEach(([key, value]) => {
      if (options && Object.prototype.hasOwnProperty.call(options, key)) {
        props[key] = value
      }
    })
  }
}

export function updateProps(
  instance: ComponentInternalInstance,
  rawProps: Data | null,
) {
  Object.assign(instance.props, rawProps)
}
