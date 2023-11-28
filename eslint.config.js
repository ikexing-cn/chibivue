import { sxzz } from '@sxzz/eslint-config'

export default sxzz(
  [
    {
      rules: {
        'unicorn/filename-case': ['off'],
      },
    },
  ],
  {
    vue: true,
    prettier: true,
    markdown: false,
    unocss: false,
  },
)
