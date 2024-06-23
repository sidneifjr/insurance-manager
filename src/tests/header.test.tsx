import '@testing-library/jest-dom'

import { render, screen } from '@testing-library/react'
import { expect, test } from 'vitest'

import { Header } from '../components/header'

test('If header component in rendered correctly', () => {
  const { debug } = render(<Header />)

  debug()

  const header = screen.getByTestId('header')
  expect(header).toBeInTheDocument()
})
