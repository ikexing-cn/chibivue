import { camelize, hasOwn } from '../shared'
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

function setFullProps(
  instance: ComponentInternalInstance,
  rawProps: Data | null,
  props: Data,
) {
  const options = instance.propsOptions

  if (rawProps) {
    Object.entries(rawProps).forEach(([key, value]) => {
      let camelKey
      if (options && hasOwn(options, (camelKey = camelize(key)))) {
        props[camelKey] = value
      }
    })
  }
}

export function updateProps(
  instance: ComponentInternalInstance,
  rawProps: Data | null,
) {
  Object.entries(rawProps ?? {}).forEach(([key, value]) => {
    instance.props[camelize(key)] = value
  })
}
