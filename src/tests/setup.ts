import { afterEach, expect } from 'vitest'
import { cleanup } from '@testing-library/react'

import * as matchers from 'vitest-axe/matchers'

afterEach(() => {
  cleanup()
})

// Update type augmentation to use the correct matcher type
declare module 'vitest' {
  interface Assertion<T = any> {
    toHaveNoViolations(): T
  }
}

expect.extend(matchers)
