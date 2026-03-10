import DefaultTheme from 'vitepress/theme'
import { inBrowser } from 'vitepress'
import { inject } from '@vercel/analytics'

export default {
  ...DefaultTheme,
  enhanceApp() {
    if (inBrowser && import.meta.env.PROD) {
      inject()
    }
  }
}
