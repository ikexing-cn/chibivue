import { createApp, h } from 'chibivue'

const app = createApp({
  render() {
    return h('div', {}, [
      h('h1', {}, ['Hello world.', h('h2', {}, ['Hello world.'])]),
      h('button', {}, ['click me!']),
    ])
  },
})

app.mount('#app')
