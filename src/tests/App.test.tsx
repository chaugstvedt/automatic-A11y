import { render } from '@testing-library/react'
import { expect, test } from 'vitest'

import axe from './axe-helper.tsx'
import App from '../App.tsx'

test('should not have any accessibility errors', async () => {
  const { container } = render(<App/>)
  const results = await axe(container)
	expect(results).toHaveNoViolations()
})
