import { configureAxe } from 'vitest-axe'

const axe = configureAxe({
  rules: {
    'color-contrast': { enabled: false }
  }, 
})

export default axe