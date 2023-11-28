import { createApp, h } from 'chibivue'

const app = createApp({
  render() {
    return h('div', {}, [
      h(
        'h1',
        {
          style: 'color: blue; font-weight: bold;',
        },
        ['Hello World'],
      ),
      h(
        'button',
        {
          onClick: () => {
            // eslint-disable-next-line no-alert
            alert('patch event successs!')
          },
        },
        ['click me!'],
      ),
    ])
  },
})

app.mount('#app')
