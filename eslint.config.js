import { sxzz } from '@sxzz/eslint-config'

export default sxzz(
  [
    {
      rules: {
        'unicorn/filename-case': ['off'],
        'unicorn/prefer-string-replace-all': ['off'],
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
