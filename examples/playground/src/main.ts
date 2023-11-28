import { createApp, h, reactive } from 'chibivue'

const app = createApp({
  setup() {
    const state = reactive({ count: 0 })

    const increment = () => {
      state.count++
    }

    return function render() {
      return h('div', { id: 'my-app' }, [
        h('p', { style: 'color: red; font-weight: bold;' }, ['Hello world.']),
        h(
          'button',
          {
            onClick: () => {
              // eslint-disable-next-line no-alert
              increment()
            },
          },
          [`click me! ${state.count}`],
        ),
      ])
    }
  },
})

app.mount('#app')
